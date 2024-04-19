import {
  Button,
  Container,
  render,
  Text,
  VerticalSpace,
  Dropdown,
} from '@create-figma-plugin/ui';
import { emit } from '@create-figma-plugin/utilities';
import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';

import { ApplyVariablesHandler, CloseHandler } from './types';

function Plugin() {
  const [collections, setCollections] = useState<{ name: string; key: string }[]>([]);
  const [selectedCollectionKey, setSelectedCollectionKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.pluginMessage && event.data.pluginMessage.type === 'COLLECTIONS_FETCHED') {
        setCollections(event.data.pluginMessage.collections);
        setIsLoading(false);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleApplyVariablesClick = useCallback(() => {
    if (selectedCollectionKey) {
      console.log(selectedCollectionKey)
      emit<ApplyVariablesHandler>('APPLY_VARIABLES', { collectionKey: selectedCollectionKey });
    }
  }, [selectedCollectionKey]);

  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE');
  }, []);

  return (
    <Container space="medium">
      {isLoading ? (
        <Text>Loading collections...</Text>
      ) : (
        h('div', null,
          <VerticalSpace space="large" />,
          <Text>Select a Variable Collection:</Text>,
          <VerticalSpace space="small" />,
          <Dropdown
            variant="border"
            options={collections.map(collection => ({ value: collection.name }))}
            onValueChange={setSelectedCollectionKey}
            value={selectedCollectionKey || null}
          />,
          <VerticalSpace space="extraLarge" />,
          <Button fullWidth onClick={handleApplyVariablesClick}>
            Apply Variables
          </Button>,
          <VerticalSpace space="small" />,
          <Button fullWidth onClick={handleCloseButtonClick} secondary>
            Close
          </Button>,
          <VerticalSpace space="small" />
        )
      )}
    </Container>
  );
}

export default render(Plugin);