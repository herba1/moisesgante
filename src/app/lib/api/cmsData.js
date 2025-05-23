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