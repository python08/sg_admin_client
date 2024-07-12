export interface SliderCardData {
  updateTitle: string;
  updateDescription: string;
  image?: string;
}

export type CarouselType = {
  sliderData: SliderCardData[];
};
