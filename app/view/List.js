Ext.define('BookStore.view.List', {
    extend: 'Ext.form.Panel',
    title: 'List',
    titleAlign: 'center',
    layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'start'
    },
    bodyPadding: 20,

    items: [{
        xtype: 'container',
        flex: 2
    },
        {
            id: 'bookList',
            xtype: 'grid',
            layout: 'fit',
            flex: 8,
            height: 400,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    itemId: 'deleteButton',
                    text: 'Delete'
                }]
            }],
            store: null,
            selType: 'checkboxmodel',
            selModel: {
                mode: 'MULTI'
            },
            columns: [
                {header: 'No', dataIndex: 'id', width: 30},
                {header: 'Title', dataIndex: 'title', width: 200},
                {header: 'Author', dataIndex: 'author'},
                {header: 'Status', dataIndex: 'type', flex: 1}
            ],
            bbar: {
                xtype: 'pagingtoolbar',
                store: 'BookList',
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;books ',
                emptyMsg: 'No books to display&nbsp;'
            }
        },
        {
            xtype: 'container',
            flex: 2
        }
    ]

});