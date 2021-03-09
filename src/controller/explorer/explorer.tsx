import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
import {
    activityBarService,
    IActivityBarItem,
    sidebarService,
    explorerService,
} from 'mo';
import * as React from 'react';
import { IFolderTree } from 'mo/model';
import { ExplorerView, FolderTreeView } from 'mo/workbench/sidebar/explore';
import { IActionBarItem } from 'mo/components/actionBar';
// TODO: 自依赖问题 connect 失效，暂时手动引入 Controller 往 View 层传递
import { folderTreeController, explorerController } from 'mo/controller';
export interface IExplorerController {
    onHeaderToolbarClick?: (e: React.MouseEvent, item: IActionBarItem) => void;
}

@singleton()
export class ExplorerController
    extends Controller
    implements IExplorerController {
    constructor() {
        super();
        this.initView();
    }

    private initView() {
        const state = activityBarService.getState();
        const sideBarState = sidebarService.getState();
        const explorerState = explorerService.getState();
        const exploreActiveItem = {
            id: 'active-explorer',
            name: 'Explore',
            iconName: 'codicon-files',
        };

        activityBarService.setState({
            selected: exploreActiveItem.id,
            data: [...state.data!, exploreActiveItem],
        });
        const explorePane = {
            id: 'explore',
            title: 'EXPLORER',
            render() {
                return <ExplorerView {...explorerController} />;
            },
        };

        activityBarService.onSelect((e, item: IActivityBarItem) => {
            console.log('Search Pane onClick:', e, item);
            if (item.id === exploreActiveItem.id) {
                sidebarService.setState({
                    current: explorePane.id,
                });
            }
        });

        // sidebarService.push(explorePane);
        sidebarService.setState({
            current: explorePane.id,
            panes: [...sideBarState.panes!, explorePane],
        });

        /**
         * explorer service
         * includes collapse and tree
         */
        const editorPanel = {
            id: 'editors',
            name: 'OPEN EDITORS',
            toolbar: [
                {
                    id: 'toggle',
                    title: 'Toggle Vertical',
                    disabled: true,
                    iconName: 'codicon-editor-layout',
                },
                {
                    id: 'save',
                    title: 'Save All',
                    disabled: true,
                    iconName: 'codicon-save-all',
                },
                {
                    id: 'close',
                    title: 'Close All Editors',
                    iconName: 'codicon-close-all',
                },
            ],
            renderPanel: () => {
                return <span>editors</span>;
            },
        };

        const sampleFolderPanel = {
            id: 'sample_folder',
            name: 'Sample Folder',
            toolbar: [
                {
                    id: 'new_file',
                    title: 'New File',
                    iconName: 'codicon-new-file',
                    onClick: (e) => {
                        this.createFile(e, 'newFile');
                    },
                },
                {
                    id: 'new_folder',
                    title: 'New Folder',
                    iconName: 'codicon-new-folder',
                    onClick: (e) => {
                        this.createFile(e, 'newFolder');
                    },
                },
                {
                    id: 'refresh',
                    title: 'Refresh Explorer',
                    iconName: 'codicon-refresh',
                },
                {
                    id: 'collapse',
                    title: 'Collapse Folders in Explorer',
                    iconName: 'codicon-collapse-all',
                },
            ],
            renderPanel: () => {
                const folderProps: IFolderTree = {
                    data: explorerState.folderTree?.data,
                    contextMenu: explorerState.folderTree?.contextMenu,
                };
                return (
                    <FolderTreeView
                        {...folderProps}
                        {...folderTreeController}
                    />
                );
            },
        };

        const outlinePanel = {
            id: 'outline',
            name: 'OUTLINE',
            toolbar: [
                {
                    id: 'outline-collapse',
                    title: 'Collapse All',
                    iconName: 'codicon-collapse-all',
                },
                {
                    id: 'outline-more',
                    title: 'More Actions...',
                    iconName: 'codicon-ellipsis',
                },
            ],
        };

        explorerService.addPanel([
            editorPanel,
            sampleFolderPanel,
            outlinePanel,
        ]);
    }

    private createFile = (e, type) => {
        e.stopPropagation();
        const explorerState = explorerService.getState();
        const { data, current } = explorerState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        explorerService[type]?.(nodeId);
    };

    public readonly onClick = (event: React.MouseEvent) => {
        // console.log('onClick:', panelService);
    };

    public readonly onHeaderToolbarClick = (
        e: React.MouseEvent,
        item: IActionBarItem
    ) => {
        e.stopPropagation();
        console.log('onClick:', e, item);
    };
}
