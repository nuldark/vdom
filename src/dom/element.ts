/**
 * Factory method for create a new Element.
 *
 * @param {string} type
 * @param {object|null} props
 * @param {Element[]} children
 * @returns {Element} 
 */
export const createElement = (type: string, props: object|null = null, children: Element[] = []): Element => {
  if (props === null) {
    props = {};
  }
  
  return new Element(type, props, children);
}

export class Element {
  public type: string;
  public props: object;
  public children: Element[];
  
  constructor(type: string, props: object, chidren: Element[]) {
    this.type = type;
    this.props = props;
    this.children = chidren;
  } 
}