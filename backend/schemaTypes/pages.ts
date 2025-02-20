import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pages',
  title: 'Paginas',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'intro',
      title: 'Intro',
    },
    {
      name: 'divisor1',
      title: 'Primer Divisor',
    },
    {
      name: 'location',
      title: 'Ubicación',
    },
    {
      name: 'amenities',
      title: 'Amenidades',
    },
    {
      name: 'divisor2',
      title: 'Segundo Divisor',
    },
    {
      name: 'models',
      title: 'Modelos',
    },
    {
      name: 'testimonials',
      title: 'Testimonios',
    },
    {
      name: 'gallery',
      title: 'Galería',
    },
  ],
  fields: [
    defineField({
      name: 'setMainPage',
      title: 'NOTA: Solo activar si esta hoja es la pagina principal',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'name',
      title: 'Nombre de la landing',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      group: 'seo',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'dsc',
          title: 'Descripción',
          type: 'string',
        },
        {
          name: 'keywords',
          title: 'Palabras Claves',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      group: 'hero',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 1,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección en la pagina',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'h1',
          title: 'Titulo de la pagina',
          type: 'string',
        },
        {
          name: 'portableText',
          title: 'Titulo llamativo',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn',
          title: 'Texto de botón',
          type: 'string',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      group: 'intro',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 2,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn',
          title: 'Texto de botón',
          type: 'string',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'divisor1',
      title: 'Primer Divisor',
      group: 'divisor1',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 3,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      group: 'location',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 4,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'btn',
          title: 'Texto de botón de ubicación',
          type: 'string',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenidades',
      group: 'amenities',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 5,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'list',
          title: 'Listado de Amenidades',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'amenities'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'divisor2',
      title: 'Segundo Divisor',
      group: 'divisor2',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          readOnly: true,
          initialValue: 6,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'img',
          title: 'Imagen',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'models',
      title: 'Modelos',
      group: 'models',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',

          initialValue: 7,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'list',
          title: 'Listado de Modelos',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'models'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'testy',
      title: 'Testimonios',
      group: 'testimonials',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',

          initialValue: 8,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'list',
          title: 'Listado de Testimonios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nombre',
                  type: 'string',
                },
                {
                  name: 'img',
                  title: 'Foto de perfil',
                  type: 'image',
                },
                {
                  name: 'text',
                  title: 'Comentario',
                  type: 'text',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galería',
      group: 'gallery',
      type: 'object',
      fields: [
        {
          name: 'id',
          type: 'number',
          initialValue: 9,
        },
        {
          name: 'setActive',
          title: 'Activar si quiere que se muestre esta sección',
          type: 'boolean',
        },
        {
          name: 'setNav',
          title: 'Activar si quiere que se muestre en la barra navegación',
          type: 'boolean',
        },
        {
          name: 'nameNav',
          title: 'Nombre de la navegación',
          type: 'string',
          hidden: ({parent}) => !parent?.setNav,
        },
        {
          name: 'portableText',
          title: 'Contenido',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'list',
          title: 'Listado de Fotos',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            layout: 'grid',
          },
        },
      ],
    }),
  ],
})
