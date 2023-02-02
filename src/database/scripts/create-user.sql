CREATE SEQUENCE IF NOT EXISTS public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

CREATE TYPE public.enum_users_role AS ENUM
    ('admin', 'manager', 'developer');

ALTER TYPE public.enum_users_role
    OWNER TO postgres;

CREATE TYPE public.enum_users_status AS ENUM
    ('active', 'archived');

ALTER TYPE public.enum_users_status
    OWNER TO postgres;    

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password_hash character varying(255) COLLATE pg_catalog."default",
    role enum_users_role NOT NULL,
    status enum_users_status NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;    


ALTER TABLE IF EXISTS public.caracterizacaos
    ADD COLUMN created_at timestamp with time zone NOT NULL;

ALTER TABLE IF EXISTS public.caracterizacaos
    ADD COLUMN updated_at timestamp with time zone NOT NULL;












