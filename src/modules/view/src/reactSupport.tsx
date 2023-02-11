import React, {
  ComponentProps,
  ComponentType,
  MemoExoticComponent,
} from 'react'
import isEqual from 'react-fast-compare'

/**
 * React-Fast-compare 를 이용하여
 * Components isEqual check
 * @param Component 
 * @param propsAreEqual 
 * @returns 
 */
export function ReactMemoEx<T extends ComponentType<any>>(
  Component: T,
  propsAreEqual: (
    prevProps: Readonly<ComponentProps<T>>,
    nextProps: Readonly<ComponentProps<T>>
  ) => boolean = isEqual
): MemoExoticComponent<T> {
  return React.memo(Component, propsAreEqual)
}
