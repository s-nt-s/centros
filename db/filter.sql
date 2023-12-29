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
    hoja        INTEGER DEFAULT 0 NOT NULL,
    PRIMARY KEY (centro, nombre),
    CONSTRAINT fk_etapa_centro_centro
        FOREIGN KEY (centro)
        REFERENCES CENTRO(id)
        ON DELETE CASCADE
);

INSERT INTO ETAPA_NOMBRE_CENTRO (centro, nombre, tipo, hoja)
select centro, nombre, tipo, hoja from OLD_ETAPA_NOMBRE_CENTRO;

ALTER TABLE CENTRO DROP COLUMN titularidad;
DROP TABLE OLD_ETAPA_NOMBRE_CENTRO;
DROP TABLE TITULARIDAD;
DROP TABLE EDUCACION_DIFERENCIADA;

UPDATE TIPO SET abr='CEIPS' where abr='CP INF-PRI-SEC';
UPDATE TIPO SET abr='CEE' where abr='CP EE';
UPDATE TIPO SET abr='CIFP' where abr='CP IFP';
UPDATE TIPO SET abr='CARCEL' where abr='CEPA.EP';
UPDATE TIPO SET abr='CIFP' where abr='CP IFP';
UPDATE TIPO SET abr='EOEP-GE' where abr='EOEP GENERAL';
UPDATE TIPO SET abr='EOEP-AT' where abr='EOEP ATEN-TEMPR';
UPDATE TIPO SET abr='EOEP-ES' where abr='EOEP ESPECÍFICO';

UPDATE TIPO SET txt=REPLACE(txt, 'Centro público ', 'Centro ');

UPDATE CENTRO SET latitud=0 where latitud is null;
UPDATE CENTRO SET longitud=0 where longitud is null;

pragma integrity_check;
pragma foreign_key_check;