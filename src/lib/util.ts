export function toTitle(s: string) {
  if (s.length < 2) return s.toUpperCase();
  return s[0].toUpperCase() + s.substring(1).toLowerCase();
}

export function smart_title(phrase: string, split = /\s+/) {
  phrase = phrase
    .split(split)
    .map((w) => {
      if (/-/.test(w)) return smart_title(w, /-/).replace(" ", "-");
      w = w.toLowerCase();
      if (
        /^(?=[MDCLXVI])M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(
          w
        )
      )
        return w.toUpperCase();
      if (w.length < 3 || ["del", "las", "los"].includes(w)) return w;
      return toTitle(w);
    })
    .join(" ");
  return phrase[0].toUpperCase() + phrase.substring(1);
}

export function dateToString(d: Date) {
  const offset = d.getTimezoneOffset();
  const dt = new Date(d.getTime() - offset * 60 * 1000);
  return dt.toISOString().split("T")[0];
}

export function dedent(text: string) {
  const re_whitespace = /^([ \t]*)(.*)\n/gm;
  let l, m, i;

  while ((m = re_whitespace.exec(text)) !== null) {
    if (!m[2]) continue;
    if ((l = m[1].length)) {
      i = i !== undefined ? Math.min(i, l) : l;
    } else break;
  }

  if (i) text = text.replace(new RegExp("^[ \t]{" + i + "}(.*\n)", "gm"), "$1");

  return text.trim();
}

export class Mail {
  to: string | null;
  bcc: string | null;
  body: string | null;
  subject: string | null;

  static mail_to(to: string, subject: string, body: string) {
    return new Mail({
      to: to,
      subject: subject,
      body: body,
    }).mailto;
  }

  static mail_bcc(bcc: string, subject: string, body: string) {
    return new Mail({
      bcc: bcc,
      subject: subject,
      body: body,
    }).mailto;
  }

  static mail_tobcc(to: string[], subject: string, body: string) {
    if (to.length==0) return '#';
    if (to.length==1) return Mail.mail_to(to[0], subject, body);
    return Mail.mail_bcc(to.join(";"), subject, body);
  }

  constructor({
    to,
    bcc,
    subject,
    body,
  }: {
    to?: string;
    bcc?: string;
    subject?: string;
    body?: string;
  }) {
    this.to = to ?? null;
    this.bcc = bcc ?? null;
    this.body = body ?? null;
    this.subject = subject ?? null;
    if (this.body != null) this.body = dedent(this.body);
  }

  get mailto() {
    if (
      this.to != null &&
      this.bcc == null &&
      this.body == null &&
      this.subject == null
    )
      return "mailto:" + this.to;
    const url = new URL("mailto:");
    if (this.to != null) url.searchParams.append("to", this.to);
    if (this.bcc != null) url.searchParams.append("bcc", this.bcc);
    if (this.subject != null) url.searchParams.append("subject", this.subject);
    if (this.body != null) url.searchParams.append("body", this.body);
    return url.toString();
  }
}

function tirmnull(s: string | null) {
  if (s == null) return null;
  s = s.trim();
  if (s.length == 0) return null;
  return s;
}

export function to_dict(arr: any[]) {
  return Object.assign({}, ...arr.map((x) => ({ [x.id]: x })));
}

export function isChecked(i: Element | string) {
  if (typeof i == "string") i = document.querySelector(i)!;
  return (i as HTMLInputElement).checked;
}
export function getVal(
  i: Element | string,
  dflt: string | string[] | boolean | null = null
) {
  if (typeof i == "string") {
    const b = document.querySelector(i) as HTMLElement;
    if (b == null) {
      if (dflt !== null) return dflt;
      console.error(i + " not found");
    }
    i = b;
  }
  const val = (() => {
    if (i.tagName == "INPUT") {
      const n = i as HTMLInputElement;
      if (["checkbox", "radio"].includes(n.type)) return n.checked;
      return tirmnull(n.value);
    }
    if (i.tagName == "SELECT") {
      const s = i as HTMLSelectElement;
      if (s.type == "select-multiple")
        return Array.from(s.selectedOptions).flatMap((o) => {
          const v = tirmnull(o.value);
          return v == null ? [] : v;
        });
      return tirmnull(s.value);
    }
    return null;
  })();
  return val;
}

export function get_distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371; // km (change this constant to get miles)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

export function yJoin(arr: string[]|string|null) {
    if (arr == null) return "";
    if (typeof arr == "string") arr = arr.trim().split(/\s+/);
    if (arr.length == 0) return "";
    if (arr.length == 1) return arr[0];
    return arr.slice(0, arr.length-1).join(", ") + ' y ' + arr[arr.length-1]
}