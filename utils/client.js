import Client from "@sanity/client"
import config from "./config"

const client = Client({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true
})

export default client