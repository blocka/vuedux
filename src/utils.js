// @flow
export const getOptions = (component: any) => 
  typeof component === 'function'
    ? component.option 
    : component

export const normalizeProps = (map: any): any => (
  Array.isArray(map)
    ? map.reduce((acc, key) => ({
      ...acc,
      [key]: {type: null},
    }), {})
    : map
);
