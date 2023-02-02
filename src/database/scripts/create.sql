-- SEQUENCES

CREATE SEQUENCE IF NOT EXISTS public.lancamento_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.lancamento_id_seq
    OWNER TO postgres;


CREATE SEQUENCE IF NOT EXISTS public.projeto_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.projeto_id_seq
    OWNER TO postgres;


CREATE SEQUENCE IF NOT EXISTS public.tarefas_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.tarefas_id_seq
    OWNER TO postgres;

CREATE SEQUENCE IF NOT EXISTS public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.users_id_seq
    OWNER TO postgres;

-- TYPES

CREATE TYPE public.enum_users_role AS ENUM
    ('admin', 'manager', 'developer');

ALTER TYPE public.enum_users_role
    OWNER TO postgres;

CREATE TYPE public.enum_users_status AS ENUM
    ('active', 'archived');

ALTER TYPE public.enum_users_status
    OWNER TO postgres;

-- TABELAS

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

CREATE TABLE IF NOT EXISTS public.tarefas
(
    id integer NOT NULL DEFAULT nextval('tarefas_id_seq'::regclass),
    descricao character varying COLLATE pg_catalog."default" NOT NULL,
    qtd_horas double precision NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL,
    CONSTRAINT tarefas_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tarefas
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.projetos
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    inicio time without time zone NOT NULL,
    fim time without time zone NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    CONSTRAINT "Projeto_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.projetos
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.lancamentos
(
    id integer NOT NULL DEFAULT nextval('lancamento_id_seq'::regclass),
    fim date NOT NULL,
    qtd_hora double precision NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL,
    inicio date NOT NULL,
    descricao text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT lancamentos_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.lancamentos
    OWNER to postgres;

    nextval('classificacao_id_seq'::regclass)