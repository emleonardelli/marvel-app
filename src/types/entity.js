export const comics = {
    id: 'id',
    name: 'Comics',
    entity: 'comics',
    title: 'title',
    description: 'description',
    related: [
        'series',
        'creators',
        'characters',
        'stories',
        'events',
    ]
}

export const characters = {
    id: 'id',
    name: 'Personajes',
    entity: 'characters',
    title: 'name',
    description: 'description',
    related: [
        'comics',
        'series',
        'events',
    ]
}

export const creators = {
    id: 'id',
    name: 'Creadores',
    entity: 'creators',
    title: 'fullName',
    description: 'description',
    related: [
        'comics',
        'series',
        'stories',
        'events',
    ]
}

export const events = {
    id: 'id',
    name: 'Eventos',
    entity: 'events',
    title: 'title',
    description: 'description',
    related: [
        'creators',
        'characters',
        'stories',
        'comics',
        'series',
    ]
}

export const series = {
    id: 'id',
    name: 'Series',
    entity: 'series',
    title: 'title',
    description: 'description',
    related: [
        'creators',
        'characters',
        'stories',
        'comics',
        'events',
    ]
}

export const stories = {
    id: 'id',
    name: 'Historias',
    entity: 'stories',
    title: 'title',
    description: 'description',
    related: [
        'creators',
        'characters',
        'series',
        'comics',
        'events',
    ]
}