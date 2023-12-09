PRAGMA foreign_keys = ON;
delete from CENTRO where 
    not exists(select * from CONCURSO_ANEXO_CENTRO cac where cac.centro=CENTRO.id)
    AND (
        titularidad!='PUB' OR
        titular!='COMUNIDAD DE MADRID' OR
        tipo in (
            '300', -- ESTABLECIMIENTO ADMINISTRATIVO
            '303'  -- CENTRO DOCENTE EN EL EXTRANJERO
        ) -- OR
        -- not exists(select * from centro c where c.titular='COMUNIDAD DE MADRID' and c.tipo=CENTRO.tipo)
        -- (tipo not in ('0', '00', '000') and printf("%d", tipo)='0')
    )
;

delete from ETAPA where not exists (
    select * from ETAPA_CENTRO ec where ec.etapa=ETAPA.id
);

delete from TIPO where not exists (
    select * from CENTRO c where c.tipo=TIPO.id
);

ALTER TABLE ETAPA_NOMBRE_CENTRO RENAME TO OLD_ETAPA_NOMBRE_CENTRO;

CREATE TABLE ETAPA_NOMBRE_CENTRO (
    centro      INTEGER NOT NULL,
    nombre      TEXT NOT NULL,
    tipo        TEXT,
    PRIMARY KEY (centro, nombre),
    CONSTRAINT fk_etapa_centro_centro
        FOREIGN KEY (centro)
        REFERENCES CENTRO(id)
        ON DELETE CASCADE
);

INSERT INTO ETAPA_NOMBRE_CENTRO (centro, nombre, tipo)
select centro, nombre, tipo from OLD_ETAPA_NOMBRE_CENTRO;

ALTER TABLE CENTRO DROP COLUMN titularidad;
DROP TABLE OLD_ETAPA_NOMBRE_CENTRO;
DROP TABLE TITULARIDAD;
DROP TABLE EDUCACION_DIFERENCIADA;

pragma integrity_check;
pragma foreign_key_check;