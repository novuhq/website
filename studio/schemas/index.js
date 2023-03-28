// Document schemas
import channel from './documents/channel';
import provider from './documents/provider';
import technicalUseCase from './documents/technical-use-case';
// Object types
import channelReference from './objects/channelReference';
import codeBlock from './objects/code-block';
import content from './objects/content';
import providerReference from './objects/providerReference';
import quoteBlock from './objects/quote-block';

export const schemaTypes = [
  channel,
  provider,
  technicalUseCase,
  /* Your objects here! */
  codeBlock,
  quoteBlock,
  channelReference,
  providerReference,
  content,
];
