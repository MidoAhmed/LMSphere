-- Extension nécessaire pour UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Table des cours
CREATE TABLE IF NOT EXISTS public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid REFERENCES auth.users (id),
  title TEXT NOT NULL,
  description TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Table des contenus (vidéos, PDF, etc.)
CREATE TABLE IF NOT EXISTS public.contents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES public.courses (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('video', 'pdf', 'article', 'quiz', 'image')),
  content_url TEXT NOT NULL,
  position INTEGER DEFAULT 0
);

-- Affectation des cours aux utilisateurs
CREATE TABLE IF NOT EXISTS public.assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users (id),
  course_id uuid REFERENCES public.courses (id) ON DELETE CASCADE,
  assigned_by uuid REFERENCES auth.users (id),
  assigned_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, course_id)
);

-- Suivi de la progression
CREATE TABLE IF NOT EXISTS public.progress_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users (id),
  course_id uuid REFERENCES public.courses (id),
  progress_percentage NUMERIC(5,2) DEFAULT 0 CHECK (progress_percentage BETWEEN 0 AND 100),
  last_updated_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ
);
