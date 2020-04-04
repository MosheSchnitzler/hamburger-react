import { Fade } from '../../../src'
import { Sling } from '../../../src'
import { Spin } from '../../../src'
import { Turn } from '../../../src'
import { Twirl } from '../../../src'
import { Squash } from '../../../src'
import Hamburger from '../../../src'
import Card from './card'
import NewCard from './new-card'
import React from 'react'

export default () => (
  <>
    <div className="w-full">
      <Card title="Tilt">
        <Hamburger size={36} direction="right" />
        <div>
          import
          <span className="text-white"> Hamburger </span>
          from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Hamburger size={36} />
      </Card>

      <Card title="Fade">
        <Fade size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Fade </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Fade size={36} />
      </Card>

      <Card title="Twirl">
        <Twirl size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Twirl </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Twirl size={36} />
      </Card>

      <Card title="Turn">
        <Turn size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Turn </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Turn size={36} />
      </Card>

      <Card title="Sling">
        <Sling size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Sling </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Sling size={36} />
      </Card>

      <Card title="Spin">
        <Spin size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Spin </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Spin size={36} />
      </Card>

      <NewCard title="Squash">
        <Squash size={36} />
        <div>
          import {'{'}
          <span className="text-white"> Squash </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
      </NewCard>
    </div>
  </>
)