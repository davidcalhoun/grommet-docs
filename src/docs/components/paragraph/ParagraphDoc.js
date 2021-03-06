// (C) Copyright 2015-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Paragraph.displayName = 'Paragraph';

const USAGE =
`import Paragraph from 'grommet/components/Paragraph';
<Paragraph>
  Text ...
</Paragraph>`;

const TEXT = `Raised on hip-hop and foster care, defiant city kid Ricky
gets a fresh start in the New Zealand countryside. He quickly finds himself
at home with his new foster family: the loving Aunt Bella, the cantankerous
Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship
Ricky to another home, both he and Hec go on the run in the bush. As a
national manhunt ensues, the newly branded outlaws must face their
options: go out in a blaze of glory or overcome their differences and
survive as a family.`;

export default class ParagraphDoc extends Component {

  render () {
    return (
      <DocsArticle title="Paragraph" colorIndex="neutral-3">

        <section>
          <p>A paragraph of text, such as ...</p>
          <Paragraph>
            {TEXT}
          </Paragraph>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>size       small|medium|large|xlarge</code></dt>
            <dd>The size of the Paragraph text.
              Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/paragraph/examples`}>
            Paragraph Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
