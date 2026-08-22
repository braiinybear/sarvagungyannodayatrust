export interface Story {
  id: string;
  img: string;
  alt: string;
  cat: string;
  title: string;
  who: string;
  snippet?: string;
}

export const STORIES: Story[] = [
  {
    id: "story-1",
    img: "https://images.pexels.com/photos/5780601/pexels-photo-5780601.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Elderly woman smiling",
    cat: "Digital Literacy",
    title: "“Now I teach my grandchildren the computer.”",
    who: "Kamla Devi, 67 · Uttarakhand",
    snippet: "Through our digital literacy workshops for seniors, Kamla learned basic computing and smartphone navigation."
  },
  {
    id: "story-2",
    img: "https://images.pexels.com/photos/11359605/pexels-photo-11359605.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Elderly man smiling",
    cat: "Elderly Care",
    title: "“They have become like my own family.”",
    who: "Ram Prasad, 79 · Madhya Pradesh",
    snippet: "Receiving doorstep healthcare and monthly ration support gave Ram Prasad dignity and comfort."
  },
  {
    id: "story-3",
    img: "https://images.pexels.com/photos/1469875/pexels-photo-1469875.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Women working together",
    cat: "Community",
    title: "“We built our village water pump together.”",
    who: "Sunita & Village SHG · Uttar Pradesh",
    snippet: "With trust support, women led the installation of a clean drinking water facility in their village."
  }
];
