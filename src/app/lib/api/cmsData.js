import { client } from "@/sanity/lib/client";

export async function getHeroData() {
  return await client.fetch(`
*[_type=='hero'][0]{
  featuredArtwork->{
    title, mainImage{alt, asset->{url},crop,hotspot}
  },
  secondaryArtwork1->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork2->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork3->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork4->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
secondaryArtwork5->{
    title,
    mainImage{alt, asset->{url},crop,hotspot}
  },
subtitle,title

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