import MdBook from 'react-icons/lib/md/book'

export default {
  name: 'writing',
  title: 'Writing',
  type: 'document',
  icon: MdBook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Featured items will show up in the Featured section of the home page'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      description: 'You can use this field to set the release date for the written work',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'postAuthor' }]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'classification',
      type: 'string',
      options: {
        list: [
          { title: 'Flash Fiction', value: 'flashFiction' },
          { title: 'Short Story', value: 'shortStory' },
          { title: 'Novel', value: 'novel' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'retailUrl',
      title: 'Retail URL',
      type: 'string',
      description: 'Enter a URL where this book can be purchased'
    }
  ],
  orderings: [
    {
      title: 'Release date new–>old',
      name: 'releaseDateAsc',
      by: [{ field: 'releaseDate', direction: 'asc' }, { field: 'title', direction: 'asc' }]
    },
    {
      title: 'Release date old->new',
      name: 'releaseDateDesc',
      by: [{ field: 'releaseDate', direction: 'desc' }, { field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      releaseDate: 'releaseDate',
      image: 'mainImage'
    },
    prepare ({ title = 'No title', releaseDate, image }) {
      return {
        title,
        subtitle: releaseDate ? new Date(releaseDate).toLocaleDateString() : 'Missing release date',
        media: image
      }
    }
  }
}
