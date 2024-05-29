/**
 * Factory method for create a new VirtualElement.
 *
 * @param {string} type
 * @param {object|null} props
 * @param {VirtualElement[]} children
 * @returns {VirtualElement}
 */
export const createElement = (type: string, props: object|null = null, children: VirtualElement[] = []): VirtualElement => {
  if (props === null) {
    props = {};
  }
  
  return new VirtualElement(type, props, children);
}

export class VirtualElement {
  public type: string;
  public props: object;
  public children: VirtualElement[];
  
  constructor(type: string, props: object, chidren: VirtualElement[]) {
    this.type = type;
    this.props = props;
    this.children = chidren;
  } 
}