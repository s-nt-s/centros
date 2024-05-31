DROP VIEW IF EXISTS ETAPA_AUX2;
DROP VIEW IF EXISTS ETAPA_AUX1;
DROP TABLE IF EXISTS MACRO_ETAPA_SUB;
DROP TABLE IF EXISTS MACRO_ETAPA_CENTRO;
DROP TABLE IF EXISTS MACRO_ETAPA;

CREATE VIEW ETAPA_AUX1 AS 
select distinct
    centro, 
    replace(replace(replace(replace(replace(replace(lower(txt),
        'Á', 'á'),
        'É', 'é'),
        'Í', 'í'),
        'Ó', 'ó'),
        'Ú', 'ú'),
        'Ñ', 'ñ'
    ) txt
from (
	select centro, nombre txt from ETAPA_NOMBRE_CENTRO
	union
	select ec.centro, e.txt from ETAPA e join ETAPA_CENTRO ec on ec.etapa=e.id
)
;
CREATE VIEW ETAPA_AUX2 AS
select centro, txt from ETAPA_AUX1 a1
where not EXISTS (
    select * from ETAPA_AUX1 a2 where a1.centro=a2.centro and a2.txt like (a1.txt || ' -> %')
)
order by centro
;

CREATE TABLE MACRO_ETAPA (
    id         INTEGER NOT NULL,
    familia    TEXT NOT NULL,
    txt        TEXT NOT NULL,
    cuerpo     TEXT,
    PRIMARY KEY (id)
);

INSERT INTO MACRO_ETAPA (id, familia, txt, cuerpo) VALUES (-1, "", "SIN USAR", "-1");

CREATE TABLE MACRO_ETAPA_CENTRO (
    centro      INTEGER NOT NULL,
    etapa       INTEGER NOT NULL,
    PRIMARY KEY (centro, etapa),
    CONSTRAINT fk_macro_etapa_centro_centro
        FOREIGN KEY (centro)
        REFERENCES CENTRO(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_macro_etapa_centro_etapa
        FOREIGN KEY (etapa)
        REFERENCES MACRO_ETAPA(id)
        ON DELETE CASCADE
);

CREATE TABLE MACRO_ETAPA_SUB (
    etapa       INTEGER NOT NULL,
    subetapa    TEXT NOT NULL,
    PRIMARY KEY (etapa, subetapa),
    CONSTRAINT fk_macro_etapa_sub_etapa
        FOREIGN KEY (etapa)
        REFERENCES MACRO_ETAPA(id)
        ON DELETE CASCADE
);