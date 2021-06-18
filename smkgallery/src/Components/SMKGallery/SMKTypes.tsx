//this file contains the types for
///art/?object_number=KMS4488&lang=en
//which is art information for a specific art

//it also has other types and mock data related data things

//Note : this was autogenerated using http://www.json2ts.com/
//but, I made changes of my own to make it typescript compatible
//like, date types which did not match with the json

import { SingleArtwork } from "../../Interfaces/SingleArtwork";
import { ArtSingleObject } from "../../Interfaces/ArtSingleObject";

//mock data comes below.
const offlineMockArtSingleObject: ArtSingleObject = {
  items: [
    {
      id: "1170089474_object",
      created: "2020-03-22T03:31:08Z",
      modified: "2021-05-10T08:39:45Z",
      acquisition_date_precision: "1947-12-31",
      credit_line: ["© Per Krohg"],
      current_location_date: "2014-04-25T00:00:00Z",
      dimensions: [
        {
          notes: "900 x 1695 mm",
          part: "Netto",
          type: "height",
          unit: "cm",
          value: "90",
        },
        {
          notes: "900 x 1695 mm",
          part: "Netto",
          type: "width",
          unit: "cm",
          value: "169.5",
        },
      ],
      inscriptions: [
        {
          content: "Per Krohg",
          type: "signature",
        },
      ],
      materials: ["blockboard"],
      object_names: [
        {
          name: "Painting",
        },
      ],
      production: [
        {
          creator_forename: "Per",
          creator_surname: "Krohg",
          creator_date_of_birth: "1889-06-18T00:00:00.000Z",
          creator_date_of_death: "1965-03-03T00:00:00.000Z",
          creator_nationality: "Norwegian",
          creator_gender: "MALE",
          creator_history:
            "Per Krohg, der hovedsagelig var vokset op i Paris og, gennem forældrene, tidligt blev forankret i det franske kunstliv, havde jævnlige forbindelser med Danmark og danske kunstnere det meste af livet. Han optrådte første gang i det danske udstillingsliv sammen med De Tretten i 1910 og vakte her en del opmærksomhed ved en moderne, Matisse-inspireret form, som endnu kun havde få danske dyrkere. I de følgende år optrådte K. og hans senere hustru, Lucy Vidil, bl.a. på Paladshotellet, hvor de introducerede de sidste nye parisiske modedanse. Under den første verdenskrig udstillede K. flere gange i Danmark og var et efterspurgt interviewoffer, både på grund af sin deltagelse i krigen som ambulancesoldat og på grund af sin modernisme. Hans separatudstilling i Den frie Udstillings bygning 1915 og hans deltagelse på KE 1916 med en række kubistisk prægede, stiliserede, ofte flertydige og altid meget artistisk bevidste malerier, fik betydning for adskillige danske modernister, heriblandt Olaf Rude, Svend Johansen og ikke mindst Jais Nielsen. K. blev repræsenteret i flere af tidens danske samlinger, bl.a. Chr. Tetzen-Lunds samling, og på Statens Museum for Kunst. I 1920rne havde K. kontakt med adskillige danske kunstnere, især dem, der var bosat i Frankrig, bl.a. Vilh. Lundstrøm og Axel Salto, som han besøgte i Sydfrankrig, og Adam Fischer, der som K. underviste på det nyoprettede Académie Scandinave i midten af 1920rne. Sammen med denne og andre skandinaviske kunstnere var han 1926 med til at stifte sammenslutningen Unionalen, der udstillede de følgende år i Sverige, Norge og Danmark. I mellemkrigstiden var K. ellers stærkt optaget af monumentale opgaver hjemme i Norge, under hvilke hans formsprog udviklede sig i retning af større tyngde og detaljerigdom.",
          creator_lref: "1796_person",
        },
      ],
      production_date: [
        {
          start: "1904-01-01T00:00:00.000Z",
          end: "1947-12-31T00:00:00.000Z",
          period: "1904-1947",
        },
      ],
      techniques: ["Oil on block board"],
      titles: [
        {
          title: "The City",
        },
      ],
      medium: ["oil"],
      number_of_parts: 1,
      object_number: "KMS4488",
      object_url: "https://api.smk.dk/api/v1/art/?object_number=kms4488",
      iiif_manifest: "https://api.smk.dk/api/v1/iiif/manifest/?id=kms4488",
      enrichment_url: "https://enrichment.api.smk.dk/api/enrichment/KMS4488",
      similar_images_url:
        "https://similar.api.smk.dk/similar/?object_number=KMS4488",
      production_dates_notes: [
        "Værkdatering: 1904-1947",
        "Påbegyndt: baseret på kunstnerens årstal afsluttet: tilgået museet",
      ],
      public_domain: false,
      rights: "https://www.smk.dk/en/section/use-of-smk-material/",
      on_display: false,
      has_image: true,
      image_thumbnail:
        "https://api.smk.dk/api/v1/thumbnail/39693bfd-495f-46d8-ab3d-a0fa1cb0752a.jpg",
      image_native:
        "https://api.smk.dk/api/v1/thumbnail/39693bfd-495f-46d8-ab3d-a0fa1cb0752a.jpg",
      colors: ["#D2D2D2", "#D2D2D2", "#9B9B9B", "#5A5A5A", "#000000"],
      artist: ["Per Krohg"],
    },
    {
      id: "1170015781_object",
      created: "2020-03-21T13:30:40Z",
      modified: "2021-05-25T15:56:42Z",
      acquisition_date_precision: "2007-12-31",
      current_location_date: "0006-07-06T00:00:00Z",
      dimensions: [
        {
          notes: "420 x 297 mm",
          part: "bladmaal",
          type: "height",
          unit: "mm",
          value: "420",
        },
        {
          notes: "420 x 297 mm",
          part: "bladmaal",
          type: "width",
          unit: "mm",
          value: "297",
        },
      ],
      inscriptions: [
        {
          content:
            'Nummereret og betitlet f.n.t.h. over signatur med sort spritpen: "80/Bravura Girl"',
          description: "Egenhændig",
          type: "Inscription",
        },
        {
          content:
            'Sign. og dat. f.n.t.h.  med sort spritpen: "2006/Peter Bonde"',
          type: "signature",
        },
      ],
      object_names: [
        {
          name: "Drawing",
        },
      ],
      production: [
        {
          creator: "Bonde, Peter",
          creator_forename: "Peter",
          creator_surname: "Bonde",
          creator_date_of_birth: "1958-09-15T00:00:00.000Z",
          creator_nationality: "Danish",
          creator_gender: "MALE",
          creator_history:
            "Peter Bonde begyndte allerede under akademitiden i de tidlige 1980ere at udstille hyppigt sammen med gruppen, der efter tysk forbillede fik navnet De nye vilde. Han var med på udstillingen Kniven på hovedet i 1982, der var det nationale gennembrud for en ny, figurativ kunst, der ironisk mimer ekspressivt maleri og ustandselig skifter stil. Gennem 1980erne har Bonde udfordret modernismens mest radikale positioner, f.eks minimalismens monokrome maleri, Joseph Beuys' moderne mytologi og landskabsmaleriet, så han på én gang gennemlever en stil og udleverer den. På Limelight 1986 udstillede han en installation af 12 malerier og tre skulpturer, der alle bar titler om landskabsmaleri, mens motiverne var store graner malet med tjære på en monokrom, grøn baggrund og påmonteret sammenviklet ståltråd og tegninger i tusch, æg og olie. Sammen med Claus Carstensen grundlagde B. 1981 hjælp-til-selvhjælp-galleriet In/from the flat, et udstillingssted for installationskunst i en forfalden lejlighed i København. I 1982 ændredes navnet til Den mobile parasitære arbejdsbrigade In/out the flat, der har udgivet plader og film.",
          creator_lref: "136_person",
        },
      ],
      production_date: [
        {
          start: "2006-01-01T00:00:00.000Z",
          end: "2006-12-31T00:00:00.000Z",
          period: "2006",
        },
      ],
      techniques: ["Collage"],
      titles: [
        {
          title: "Bravura Girl",
          type: "ARTIST",
        },
      ],
      number_of_parts: 1,
      object_number: "KKS2007-182",
      object_url: "https://api.smk.dk/api/v1/art/?object_number=kks2007-182",
      iiif_manifest: "https://api.smk.dk/api/v1/iiif/manifest/?id=kks2007-182",
      enrichment_url:
        "https://enrichment.api.smk.dk/api/enrichment/KKS2007-182",
      similar_images_url:
        "https://similar.api.smk.dk/similar/?object_number=KKS2007-182",
      production_dates_notes: ["Værkdatering: 2006"],
      public_domain: false,
      rights: "https://www.smk.dk/en/section/use-of-smk-material/",
      on_display: false,
      image_mime_type: "image/tiff",
      image_iiif_id:
        "https://iip.smk.dk/iiif/jp2/KKS2007-182.TIF.reconstructed.tif.jp2",
      image_iiif_info:
        "https://iip.smk.dk/iiif/jp2/KKS2007-182.TIF.reconstructed.tif.jp2/info.json",
      image_width: 3261,
      image_height: 4560,
      image_size: 7702409,
      image_thumbnail:
        "https://iip-thumb.smk.dk/iiif/jp2/KKS2007-182.TIF.reconstructed.tif.jp2/full/!1024,/0/default.jpg",
      image_native:
        "https://api.smk.dk/api/v1/download/W3siaW1nX3VybCI6Imh0dHBzOi8vaWlwLnNtay5kay9paWlmL2pwMi9LS1MyMDA3LTE4Mi5USUYucmVjb25zdHJ1Y3RlZC50aWYuanAyL2Z1bGwvZnVsbC8wL25hdGl2ZS5qcGciLCJwdWJsaWNfZG9tYWluIjpmYWxzZSwib2JqZWN0X251bWJlciI6IktLUzIwMDctMTgyIiwibnVtIjoiIn1d/KKS2007-182.jpg",
      image_cropped: true,
      image_orientation: "portrait",
      has_image: true,
      colors: ["#000068", "#FFFFFF", "#004F87", "#9B9B9B", "#863B7A"],
      artist: ["Peter Bonde"],
      credit_line: ["© Peter Bonde / VISDA"],
    },
    {
      id: "1170086727_object",
      created: "2020-03-22T02:55:51Z",
      modified: "2021-05-07T11:49:36Z",
      acquisition_date_precision: "1974-05-24",
      credit_line: ["© Erik Thommesen"],
      current_location_date: "2008-03-14T00:00:00Z",
      dimensions: [
        {
          notes: "165 x 205 x 125 mm",
          part: "Netto",
          type: "height",
          unit: "cm",
          value: "16.5",
        },
        {
          notes: "165 x 205 x 125 mm",
          part: "Netto",
          type: "width",
          unit: "cm",
          value: "20.5",
        },
        {
          notes: "165 x 205 x 125 mm",
          part: "Netto",
          type: "depth",
          unit: "cm",
          value: "12.5",
        },
      ],
      inscriptions: [
        {
          content: "Erik 1947 13",
          type: "signature",
        },
      ],
      materials: ["eathenware"],
      object_names: [
        {
          name: "Sculpture in the round",
        },
      ],
      production: [
        {
          creator_forename: "Erik",
          creator_surname: "Thommesen",
          creator_date_of_birth: "1916-02-15T00:00:00.000Z",
          creator_date_of_death: "2008-08-22T00:00:00.000Z",
          creator_nationality: "Danish",
          creator_gender: "MALE",
          creator_history: "Tegninger: Td 839, 840\r\nGrafik: 950b",
          creator_lref: "33430_person",
        },
      ],
      production_date: [
        {
          start: "1947-01-01T00:00:00.000Z",
          end: "1947-12-31T00:00:00.000Z",
          period: "1947",
        },
      ],
      techniques: ["eathenware"],
      titles: [
        {
          title: "Girl's Head",
        },
      ],
      number_of_parts: 1,
      object_number: "KMS6810",
      object_url: "https://api.smk.dk/api/v1/art/?object_number=kms6810",
      iiif_manifest: "https://api.smk.dk/api/v1/iiif/manifest/?id=kms6810",
      enrichment_url: "https://enrichment.api.smk.dk/api/enrichment/KMS6810",
      similar_images_url:
        "https://similar.api.smk.dk/similar/?object_number=KMS6810",
      production_dates_notes: ["Værkdatering: 1947"],
      public_domain: false,
      rights: "https://www.smk.dk/en/section/use-of-smk-material/",
      on_display: false,
      has_image: true,
      image_thumbnail:
        "https://api.smk.dk/api/v1/thumbnail/0e99b6bb-8a86-484e-93d3-491edaab7ba2.jpg",
      image_native:
        "https://api.smk.dk/api/v1/thumbnail/0e99b6bb-8a86-484e-93d3-491edaab7ba2.jpg",
      colors: ["#555555", "#000000", "#9B9B9B", "#9B9B9B", "#D2D2D2"],
      artist: ["Erik Thommesen"],
    },
  ],
};

//this is where we can do some mock loading, as if we are calling the live API

//used to simulate waiting while the mock data gets the mock data from an API
const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//a function that will return art data with mocked locally available data
//it uses the about wait thing to simulate loading so we do some loading information as well.
export const getSingleArtObject = async (): Promise<
  ArtSingleObject | SingleArtwork | null
> => {
  //now either return null or return the mock data
  //firs do the waiting to simulate a network call
  //TODO - update so this value is ready from StringConstants.json or something similar json file
  const durationofloading = 3000;
  await wait(durationofloading);
  //now, get the response
  const response = offlineMockArtSingleObject;
  //now, check if response has anything
  //in our case, we check if the items is 0.
  //if it is 0, that means, there is nothing inside our data packet
  //at which point we send null
  //if it is not 0, it definitely has some data.
  //we return the actual data.
  return response.items.length === 0 ? null : response;
};