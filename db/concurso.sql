PRAGMA foreign_keys = ON;
delete from CENTRO where 
    (latitud=0 or latitud is null) or
    (latitud=0 or longitud is null) or
    not exists(
        select * from CONCURSO_ANEXO_CENTRO cac where
        cac.centro=CENTRO.id and cac.concurso='MI_CONCURSO'
    )
;
delete from CONCURSO where id!='MI_CONCURSO';

delete from ETAPA where not exists (
    select * from ETAPA_CENTRO ec where ec.etapa=ETAPA.id
);

delete from TIPO where not exists (
    select * from CENTRO c where c.tipo=TIPO.id
);

pragma integrity_check;
pragma foreign_key_check;