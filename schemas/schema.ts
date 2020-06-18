import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import documents from './documents';
import localeObjects from './locale-objects';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([...documents, ...localeObjects]),
});
