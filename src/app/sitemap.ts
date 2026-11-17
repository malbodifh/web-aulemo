import type { MetadataRoute } from "next";
import { urlSitio } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: urlSitio,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${urlSitio}/funciones`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${urlSitio}/personalizacion`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${urlSitio}/precio`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${urlSitio}/preguntas`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${urlSitio}/contacto`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${urlSitio}/nosotros`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${urlSitio}/privacidad`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${urlSitio}/terminos`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
