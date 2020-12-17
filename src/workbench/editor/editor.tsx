import 'mo/workbench/editor/style.scss';
import * as React from 'react';
import SplitPane from 'react-split-pane';

import { getBEMElement, prefixClaName } from 'mo/common/className';
import MonacoEditor from 'mo/components/monaco-editor';
import Tabs from 'mo/components/tabs';

import Welcome from './welcome';
import { IEditor, IEditorGroup } from 'mo/model';

const defaultEditorClassName = prefixClaName('editor');
const groupClassName = getBEMElement(defaultEditorClassName, 'group');

function renderEditorGroup(group: IEditorGroup, onMoveTab, onSelectTab) {
    const editor = group.activeTab;

    const tabs = group.tabs.map((item, index) => {
        return Object.assign({}, item, {
          key: item.key,
          tip: item.path,
          renderPanel:  <MonacoEditor
          options={{
              value: item.value,
              language: item.language || 'sql',
              automaticLayout: true,
          }}
          editorInstanceRef={(editorInstance) => {
              // This assignment will trigger moleculeCtx update, and subNodes update
              group.editorInstance = editorInstance;
          }}
      />
        })
      })
    return (
        <div className={groupClassName} key={`group-${group.id}`}>
            <Tabs
                type="editable-card"
                data={tabs}
                onMoveTab={onMoveTab}
                onSelectTab={onSelectTab}
                activeTab={editor.key}
                onCloseTab={(tabKey) => console.log(tabKey)}
            />
        </div>
    );
}

export function renderGroups(groups: IEditorGroup[], onMoveTab, onSelectTab) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0], onMoveTab, onSelectTab);
    } else if (groups.length > 1) {
        const averageNum = Math.round(100 / groups.length);
        return (
            <SplitPane
                split={'vertical'}
                defaultSize={`${averageNum}%`}
                primary="first"
                allowResize={true}
            >
                {groups.map((g: IEditorGroup) =>
                    renderEditorGroup(g, onMoveTab, onSelectTab)
                )}
            </SplitPane>
        );
    }
    return null;
}

export function Editor(props: IEditor) {
    const { groups, render, current, onMoveTab, onSelectTab } = props;
    let content: React.ReactNode = <Welcome />;
    if (current) {
        content = render
            ? render()
            : renderGroups(groups, (tabs) => onMoveTab?.(tabs, 1), onSelectTab);
    }

    return <div className={defaultEditorClassName}>{content}</div>;
}

export default Editor;
