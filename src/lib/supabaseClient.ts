import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";
import type { Tables } from "./database.types";
import type { PostgrestSingleResponse, PostgrestError } from "@supabase/supabase-js";

export type TablesMap = Database["public"]["Tables"];
export type TableName = keyof Database["public"]["Tables"];
export type IdTableName = {
  [K in keyof TablesMap]:
    "id" extends keyof TablesMap[K]["Row"] ? K : never
}[keyof TablesMap];

class DataBase {
  private readonly onerror: ((e:PostgrestError)=>void) | null;
  private readonly supabase;

  constructor(onerror: ((e:PostgrestError)=>void) |null = null) {
    this.supabase = createClient<Database>(
      "https://xlrdvrcjntdcrgfzmtaq.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscmR2cmNqbnRkY3JnZnptdGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNDI2MjEsImV4cCI6MjAxNzYxODYyMX0.xgbmhobSUnqailUi8PSZVZD2Jyj3XpWghYoJx4OYzU8",
    );
    this.onerror = onerror;
  }

  from<T extends TableName>(relation: T, prefix?: string) {
    if (prefix !=undefined && typeof prefix === "string") {
      relation = `${prefix}_${relation}` as T;
    }
    return this.supabase.from(relation);
  }

  protected get_data<T>(
    log: string,
    obj: PostgrestSingleResponse<T[]>
  ): T[] {
    if (obj.error) {
      console.error(log, obj);
      if (this.onerror) this.onerror(obj.error);
      throw obj.error;
    }

    console.log(`${log}: ${obj.data.length} resultados`);
    return obj.data;
  }

  public async get_one<T extends TableName>(table: T, id: number | string) {
    const r = await this.get<T>(table, id);
    if (r.length == 1) return r[0];
    throw `${table}[id=${id}] devuelve ${r.length} resultados`;
  }

  public async get<T extends TableName>(table: T, ...ids: (number | string)[]): Promise<Tables<T>[]> {
    let prm = this.from(table).select("*");
    if (ids.length == 1) prm = prm.eq('id', ids[0]);
    else if (ids.length>1) prm = prm.in('id', ids);
    const data = this.get_data<Tables<T>>(
      ids.length==0?table:`${table}[id=${ids}]`,
      await prm.returns<Tables<T>[]>()
    );
    return data;
  }

  public async getWhere<T extends TableName>(table: T, field: string,...ids: (number | string)[]): Promise<Tables<T>[]> {
    let prm = this.from(table).select();
    if (ids.length == 1) prm = prm.eq(field, ids[0]);
    else if (ids.length>1) prm = prm.in(field, ids);
    const data = this.get_data<Tables<T>>(
      ids.length==0?table:`${table}[${field}=${ids}]`,
      await prm.returns<Tables<T>[]>()
    );
    return data;
  }

  public async get_dict<T extends IdTableName>(tb: T, ...ids: (number | string)[]){
    const arr = await this.get<T>(tb, ...ids);
    const data = new Map<string|number, Tables<T>>();
    arr.forEach((q) => {
      data.set(q.id, q);
    });
    return data;
  }
}


export {
  DataBase,
};
