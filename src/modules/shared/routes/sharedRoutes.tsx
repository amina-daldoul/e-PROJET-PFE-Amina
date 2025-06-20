/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react'
import { RouteProps } from 'react-router-dom'

type RouteConfig = {
  exact: boolean | null
  path: string
  component: React.ComponentType<any>
  guard?: React.ComponentType<any> | typeof Fragment
  layout?: React.ComponentType<any> | typeof Fragment
} & RouteProps

const routes: RouteConfig[] = []

export default routes
