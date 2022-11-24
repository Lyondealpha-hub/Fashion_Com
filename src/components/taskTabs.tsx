import React from "react";
import TabPanel, {Item} from 'devextreme-react/tab-panel';
import {
    Form,
    SimpleItem,
    GroupItem,
    ButtonItem
} from 'devextreme-react/form';
import {
    DataGrid,
    Column,
    ColumnFixing
} from 'devextreme-react/data-grid';

import { TaskUpdate } from "./taskUpdate";


export const TaskTab = ()=>{
    return (
        <div className="w-full h-full flex justify-center items-center ">
            <TabPanel className="w-full h-full">
                <Item title={'Task'}>
                    <div className="w-full bg-slate-300 flex justify-between h-full">
                        <div className="w-3/5 pt-10 pl-10 pb-5 bg-yellow-500">
                                
                            <Form width={'90%'} className='flex' >

                                <GroupItem colCount={2} >
                                    <SimpleItem dataField={'Start Date'} editorType="dxDateBox"  />
                                    <SimpleItem dataField={'End Date'} editorType="dxDateBox" />
                                </GroupItem>
                                <SimpleItem dataField="Assigned By" editorType="dxSelectBox" />
                                <SimpleItem dataField="Assigned To" editorType="dxSelectBox" />
                                <GroupItem colCount={2}>
                                    <SimpleItem dataField="Status" editorType="dxSelectBox" />
                                    <SimpleItem dataField="Priority" editorType="dxSelectBox" />
                                </GroupItem>
                                <SimpleItem dataField="Title" editorType="dxSelectBox" />
                                <SimpleItem dataField="Description" editorType="dxTextArea" colSpan={5}  />
                                
                                <GroupItem colCount={4}  >
                                    <SimpleItem dataField="" editorType="dxCheckbox" />
                                    <SimpleItem dataField="Start Date" editorType="dxDateBox" />
                                    <SimpleItem dataField="End Date" editorType="dxDateBox" />
                                    <ButtonItem  name="Appraise" />
                                    
                                </GroupItem>
                            </Form>
                        </div>

                        <div className="w-3/5 h-full pt-10 pb-5 pr-1 bg-red-800">
                            <DataGrid 
                                allowColumnReordering={true}
                                dataSource ={TaskUpdate}
                                keyExpr={"ID"}
                            >
                                <Column dataField="LOCKED?" fixed={true} dataType='boolean' ></Column>
                                <Column dataField="DATE" fixed={true} dataType='date'></Column>
                                <Column dataField="%COMPLETE" fixed={true} cellRender={progressBar}></Column>
                                <Column dataField="TASK UPDATE" dataType='string'></Column>
                                <Column dataField="UPDATED BY" dataType='string'></Column>
                                <Column dataField="JOB TITLE" dataType='string'></Column>
                                <Column dataField="UPDATER" dataType='string'></Column>
                                <Column dataField="CREATED ON " dataType='string'></Column>
                                <Column dataField="COMPLETION DATE" dataType='string'></Column>
                                <Column dataField="REMARKS" dataType='string'></Column>

                                
                                <ColumnFixing enabled={true} />
                            </DataGrid>
                        </div>

                    </div>

                    
                </Item>
            </TabPanel>
        </div>
    )
}


const progressBar = ()=>{
    return (
        <div className="flex flex-col"  id="avGAllTasks">
            <div className="w-full h-4  bg-gray-200 rounded-sm dark:bg-gray-700">
                <div className="relative h-full flex ">
                    <div className=" absolute h-full w-6 bg-purple-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-sm " ></div>
                    <div className="relative text-xs text-black w-full text-center">42%</div>

                </div>
                
            </div>
        </div>
    
    )
}
