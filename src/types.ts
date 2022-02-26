export type LayoutProps = {
    options: {
        componentData: {
            title: string;
            name: string;
            type: string;
            multiple: boolean;
            dropdown?:
                | {
                      name: string;
                      optionValue: number[];
                  }[]
                | undefined;
            group?:
                | {
                      title: string;
                      name: string;
                      type: string;
                      multiple: boolean;
                      dropdown?:
                          | {
                                name: string;
                                optionValue: number[];
                            }[]
                          | undefined;
                  }[]
                | undefined;
        }[];
    };
};

export type ToggleData = {
    title: string;
    name: string;
    type: string;
    multiple: boolean;
    dropdown?:
        | {
              name: string;
              optionValue: number[];
          }[]
        | undefined;
    group?: {
        title: string;
        name: string;
        type: string;
        multiple: boolean;
        dropdown?:
            | {
                  name: string;
                  optionValue: number[];
              }[]
            | undefined;
        group?: {
            title: string;
            name: string;
            type: string;
            multiple: boolean;
            dropdown?:
                | {
                      name: string;
                      optionValue: number[];
                  }[]
                | undefined;
        }[];
    }[];
};

export type DropDownProps = {
    dropdownData: {
        name: string;
        optionValue: any;
    }[];
}[];
