export interface Resume {
  sections: [Section]
}

export interface Section {
  title: string
  entries: [Entry]
}

export interface Entry {
  title?: string
  company?: string
  duration?: Duration
  link?: string
  description: string | [string]
}

export interface Duration {
  start: string
  end: string
}
