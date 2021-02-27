import React from 'react';
import { Table } from 'antd';


const Sequences = (props) => {
    const columns = [
        {
          title:'sequence_ID',
          name: 'sequence_id',
          dataIndex: 'sequence_id',
          key:'sequence_id'
        },
        {
          title:'Sequence',
          name: 'sequence',
          dataIndex: 'sequence'
        },
        {
            title:'Result',
            name:'result',
            dataIndex:'result'
        },
        {
          title: 'Created At',
          name: 'created_at',
          dataIndex: 'created_at'
        },
      ];
    return (
        <Table dataSource={props.data} columns={columns} />
    );
}

export default Sequences;
        