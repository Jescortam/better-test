export default interface Collection {
  _id: string;
  title: string;
  contributors: string[];
  description: string;
  image: string;
  likes: number;
  views: number;
  creationDate: Date;
  lastUpdateDate: Date;
}
