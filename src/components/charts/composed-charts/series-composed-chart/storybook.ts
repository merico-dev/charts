import { storiesOf } from '@storybook/react';
import stories from './stories';

// @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
const s = storiesOf('Charts/Composed/Series');
// @ts-expect-error ts-migrate(2339) FIXME: Property 'parameters' does not exist on type 'type... Remove this comment to see the full error message
stories.forEach((story) => s.add(story.name, story.content, story.parameters));
