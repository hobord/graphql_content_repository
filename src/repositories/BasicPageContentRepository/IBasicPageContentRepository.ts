import { BasicPageContent } from "@src/entities";

export interface IBasicPageContentRepository {
  getByUuid(uuid: string): Promise<BasicPageContent>;
}