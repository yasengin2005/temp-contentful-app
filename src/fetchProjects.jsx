import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: "u2pt69nif1hk",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({
    content_type: "contentfulCmsProject",
  })
  .then((response) => console.log(response));

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "contentfulCmsProject",
      });
      const projects = response.items.map((item) => {
        const { image, title, url } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { img, id, title, url };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
