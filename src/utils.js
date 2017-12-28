// @flow
export const getOptions = (component: any) => 
  typeof component === 'function'
    ? component.options
    : component

export const normalizeProps = (map: any): any => (
  Array.isArray(map)
    ? map.reduce((acc, key) => ({
      ...acc,
      [key]: {type: null},
    }), {})
    : map
);
