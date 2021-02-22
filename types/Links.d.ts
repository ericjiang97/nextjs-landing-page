interface Link {
  name: string;
  url: string;
  icon?: {
    type: "fal" | "fab" | "fas" | "far";
    name: string;
  };
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
}
