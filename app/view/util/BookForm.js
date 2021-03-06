Ext.define('BookStore.view.util.BookForm', {
    extend: 'Ext.form.Panel',
    bodyPadding: 20,
    border: false,
    alias: 'widget.bookForm',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        padding: 10

    },
    items: [
        {
            padding: {top: 0, left: 10, right: 0, bottom: 0},
            xtype: 'panel',
            layout: {
                type: 'hbox'
            },
            border: false,
            defaultType: 'textfield',
            defaults: {
                flex: 1
            },
            items: [
                {
                    padding: {right: 20},
                    fieldLabel: 'Title',
                    emptyText: 'Enter title',
                    name: 'title'
                },
                {
                    padding: {left: 20, right: 10},
                    fieldLabel: 'Author',
                    emptyText: 'Enter author',
                    name: 'author'
                }
            ]

        },
        {
            fieldLabel: 'Desciption',
            xtype: 'textarea',
            name: 'description'
        }, {
            xtype: 'combobox',
            fieldLabel: 'Rating',
            name: 'rating',
            emptyText: 'Select rating...',
            store: [1, 2, 3, 4, 5]
        }, {
            xtype: 'datefield',
            fieldLabel: 'Creation date',
            name: 'date',
            allowBlank: false,
            maxValue: new Date()
        },
        {
            xtype: 'ratingfield',
            fieldLabel: 'Rating',
            name: 'rating',
            id: 'starRating'
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'Type',
            width: 300,
            defaults: {xtype: 'radio', name: 'type'},
            items: [
                {boxLabel: 'Paper', inputValue: 'paper'},
                {boxLabel: 'PDF', inputValue: 'PDF'},
                {boxLabel: 'EPUB', inputValue: 'EPUB'}
            ]
        }]

});
