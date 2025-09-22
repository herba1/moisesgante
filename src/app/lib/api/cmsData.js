import { client } from "@/sanity/lib/client";

export async function getHeroData() {
  return await client.fetch(`
    *[_type=='hero'][0]{
    artworks[]->{
      mainImage{
        asset->{
          _id,
          url,
          metadata
        },
        alt,
        hotspot,
        crop
      }
    },
    subtitle
  }
`);
}

export async function getFeaturedData() {
  return await client.fetch(
    `
    *[_type=='featuredSection'][0]{sectionTitle,
  artwork1->{
    title,
    description,
    mainImage{
    alt, asset->{url},crop,hotspot
    }
  },
artwork2->{
    title,
    description,
    mainImage{
    alt, asset->{url},crop,hotspot
    }
  },
}
`
  );
}


export async function getAboutData() {
  return await client.fetch(
    `
        *[_type=="about"][0]{
    education,
  fullDescription,
  qna, 
  mainImage{
    alt,
    crop,
    hotspot,
    asset->{
      url,
      metadata{dimensions}
    }
  },
  artistStatement,
  briefDescription,
  name,
}
    `
  );
}


export async function getAboutShortData() {
  return await client.fetch(
    `
*[_type == "about"][0]{
  mainImage,
  briefDescription,
  qna,
  name
}
`
  );
}

export async function getSocialMediaLinks(){
  return await client.fetch(
    `
    *[_type == "socialMediaLinks"][0].links
    `
  )
}

// sanity/queries.js
export async function getExtraFooterData() {
  return await client.fetch(`
    *[_type == "extraFooter"][0]{
      items[]{
        label,
        linkType,
        url,
        "fileUrl": file.asset->url,
        "fileName": file.asset->originalFilename
      }
    }
  `);
}


export async function getAllArtworkByYear() {
  const artworks = await client.fetch(`
    *[_type == "artwork"]{
    title,
    year,
    slug{current},
    description,
    mainImage{
    alt, asset->{url,
     metadata {
        dimensions {
          width,
          height
        }
      }
    },crop,hotspot,
    },
    additionalImages[]{
      asset->{url},
      caption,
      alt,
      crop,
      hotspot,
    }
}
    `);
  let data = {};
  artworks.map(artwork=>{
    if(!data[artwork.year]){
      data[artwork.year] = [artwork];
    }
    else if(data[artwork.year]){
      data[artwork.year].push(artwork);
    }
  })
  return data;
}

export async function getArtworkBySlug(slug){
  return await client.fetch(
    `
    *[_type=='artwork' && slug.current == '${slug}'][0]{
  _id,
  title,
  slug,
  year,
  medium,
  size,
  description,
  mainImage{
    alt,
    asset->{
      _id,
      url,
     metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  additionalImages[]{
    alt,
    caption,
    asset->{
      _id,
      url,
      metadata {
        dimensions{
        width,height 
        }
      
      }
    }
  }
}
    `
  )
}

export async function getContactCardData() {
  return await client.fetch(`
    *[_type=="contactCard"][0]{
  email,
  location,
  name,
  phone
}
  `);
}