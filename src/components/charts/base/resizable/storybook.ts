import { storiesOf } from '@storybook/react';
import stories from './stories';

// @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
const s = storiesOf('Base/Resizable');
stories.forEach((story) => s.add(story.name, story.content));
