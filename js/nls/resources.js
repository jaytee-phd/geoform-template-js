define({
    root: ({
        map: {
            error: "Unable to create map"
        },
        onlineStatus: {
            offline: "You are currently working offline. Form submissions will be saved locally until a connection to the server can be made.",
            reconnecting: "Reconnecting&hellip;",
            pending: "${total} pending edit(s) will be submitted when a network connection is re-established."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "My Organization",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "My Content",
                    favoritesLabel: "My Favorites"
                },
                title: "Select Web Map",
                searchTitle: "Search",
                ok: "Ok",
                cancel: "Cancel",
                placeholder: "Enter search term"
            },
            groupdlg: {
                items: {
                    organizationLabel: "My Organization",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "My Content",
                    favoritesLabel: "My Favorites"
                },
                title: "Select Group",
                searchTitle: "Search",
                ok: "Ok",
                cancel: "Cancel",
                placeholder: "Enter search term"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Northing",
            utm_easting: "Easting",
            utm_zone_number: "Zone Number",
            geoFormGeneralTabText: "1. Enter Information",
            locationInformationText: "2. Select Location",
            submitInformationText: "3. Complete Form",
            submitInstructions: "Add this information to the map.",
            myLocationText: "Current Location",
            locationDescription: "Specify the location for this entry by clicking/tapping the map or by using one of the following options.",
            addressText: "Search",
            geographic: "Lat/Lon",
            locationTabText: "Location",
            locationPopupTitle: "Selected Location",
            submitButtonText: "Submit entry",
            submitButtonTextLoading: "Submitting&hellip;",
            formValidationMessageAlertText: "The following fields are required:",
            selectLocation: "Please select a ${openLink}location${closeLink} for your submission.",
            emptylatitudeAlertMessage: "Please enter a ${openLink}latitude${closeLink} coordinate.",
            emptylongitudeAlertMessage: "Please enter a ${openLink}longitude${closeLink} coordinate.",
            shareUserTitleMessage: "Thank you for your contribution!",
            entrySubmitted: "Your entry has been submitted to the map.",
            shareThisForm: "Share This Form",
            shareUserTextMessage: "Tell others to contribute using the following options.",
            addAttachmentFailedMessage: "Unable to add attachment to layer",
            addFeatureFailedMessage: "Unable to add feature to layer",
            noLayerConfiguredMessage: "Whoops! Nothing to see here. In order to start collecting form submissions, configure this GeoForm and select an editable Feature Service layer to use.",
            placeholderLatitude: "Latitude (Y)",
            placeholderLongitude: "Longitude (X)",
            latitude: "Latitude",
            longitude: "Longitude",
            findMyLocation: "Locate Me",
            finding: "Locating&hellip;",
            backToTop: "Back to top",
            addressSearchText: "Your submission will appear here. You can drag the pin to correct the location.",
            shareModalFormText: "Form Link",
            close: "Close",
            locationNotFound: "Location could not be found.",
            setLocation: "Set Location",
            find: "Find address or place",
            attachment: "Attachment",
            toggleDropdown: "Toggle Dropdown",
            invalidLatLong: "Please enter valid ${latLink}latitude${closeLink} and ${lngLink}longitude${closeLink} coordinates.",
            invalidUTM: "Please enter valid ${openLink}UTM${closeLink} coordinates.",
            invalidUSNG: "Please enter valid ${openLink}USNG${closeLink} coordinates.",
            invalidMGRS: "Please enter valid ${openLink}MGRS${closeLink} coordinates.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Select&hellip;",
            applyEditsFailedMessage: "Sorry your entry cannot be submitted. Please try again.",
            requiredFields: "There are some errors. Please correct them below.",
            requiredField: "(required)",
            error: "Error",
            textRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimum value ${minValue} and Maximum value ${maxValue}",
            dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Minimum Date ${minValue} and Maximum Date ${maxValue}"
        },
        builder: {
            invalidUser: "Sorry, you dont have permission to view this item",
            invalidWebmapSelectionAlert: "The selected webmap does not contain a valid layer to use. Please add an editable FeatureLayer into your webmap to continue.",
            invalidWebmapSelectionAlert2: "For More Information please refer to ${openLink}What is Feature Service?${closeLink}",
            selectFieldsText: "Select Form Fields",
            selectThemeText: "Select Form Theme",
            webmapText: "Webmap",
            layerText: "Layer",
            detailsText: "Details",
            fieldsText: "Fields",
            styleText: "Style",
            optionText: "Options",
            previewText: "Preview",
            publishText: "Publish",
            optionsApplicationText: "Options",
            titleText: "Builder",
            descriptionText: "GeoForm is a configurable template for form-based data editing of a ${link1}Feature Service${closeLink}. This application allows users to enter data through a form instead of a map’s pop-up while leveraging the power of the ${link2}Web Map${closeLink} and editable Feature Services. Use the following steps to customize and deploy your GeoForm.",
            btnPreviousText: "Previous",
            btnNextText: "Next",
            webmapTabTitleText: "Select a Webmap",
            viewWebmap: "View webmap",
            btnSelectWebmapText: "Choose Webmap",
            btnSelectWebmapTextLoading: "Loading&hellip;",
            layerTabTitleText: "Select Editable Layer",
            selectLayerLabelText: "Layer",
            selectLayerDefaultOptionText: "Select Layer",
            detailsTabTitleText: "Form Details",
            detailTitleLabelText: "Title",
            detailLogoLabelText: "Logo Image",
            descriptionLabelText: "Help Text (optional)",
            fieldTabFieldHeaderText: "Field",
            fieldTabLabelHeaderText: "Label",
            fieldTabDisplayTypeHeaderText: "Display As",
            selectMenuOption: "Select Menu",
            selectRadioOption: "Radio Button",
            selectTextOption: "Text",
            selectCheckboxOption: "Checkbox",
            selectMailOption: "Email",
            selectUrlOption: "URL",
            selectTextAreaOption: "Textarea",
            previewApplicationText: "Preview Application",
            saveApplicationText: "Save Application",
            saveText: "Save",
            toggleNavigationText: "Toggle navigation",
            formPlaceholderText: "My Form",
            shareBuilderInProgressTitleMessage: "Publishing GeoForm",
            shareBuilderProgressBarMessage: "Please Wait&hellip;",
            shareBuilderTitleMessage: "Success! Item saved",
            shareBuilderTextMessage: "You can start collecting information by sharing with others",
            shareModalFormText: "Form Link",
            shareBuilderSuccess: "Your GeoForm has been updated & published!",
            geoformTitleText: "Geo Form",
            layerTabText: "This is the layer that the GeoForm will be built from. The layer must be a feature service that is enabled for editing with sharing permissions appropriate for your audience.",
            detailsTabText: "Use the Form Detail boxes below to customize the Title, add a custom logo, and provide a short description for your GeoForm audience. In the description you can add links to other resources, contact information, and even point your audience to a web mapping application featuring all of the data collected with the GeoForm.",
            fieldsTabText: "Here you can select which fields will be visible to your GeoForm audience, edit the Labels they will see, and add a short Description to help with data entry.",
            styleTabText: "Style your GeoForm using the themes below based on your preference.",
            publishTabText: "Ifyou are finished customizing your GeoForm, save the application and begin sharing with your audience. You can always return to this builder and continue customizing it based on feedback.",
            smallHeader: "Use Small Header",
            pushpinText: "Push pin",
            doneButtonText: "View Application Item",
            fieldTabPlaceHolderHeaderText: "Hint (optional)",
            attachmentLabelText: "Attchment Label",
            attachmentLabelHint: "Tell users what type of file to attach.",
            attachmentDescription: "Attachment Description",
            attachmentHint: "If necessary, you can provide additional attachment instructions here.",
            jumbotronDescription: "The Bootstrap Jumbotron makes it easy to define the purpose of your application. This can be disabled at any time.",
            shareGeoformText: "Share Geoform",
            shareDescription: "The sharing panel makes it easy for your audience to share the GeoForm with other collaborators once they have made a submission - this can be disabled at any time.",
            defaultMapExtent: "Default Map Extent",
            defaultMapExtentDescription: "The map will reset to the default extent in your web map after submission - this can be disabled at any time.",
            pushpinOptionsDescription: "Choose from a variety of colors for the map pushpin, it should be different from the map symbology to help the user put their submission on the map",
            selectLocationText: "Select Location By",
            myLocationText: "My Location",
            searchText: "Search",
            coordinatesText: "Latitude & Longitude Coordinates",
            usng: "USNG Coordinates",
            mgrs: "MGRS Coordinates",
            utm: "UTM Coordinates",
            selectLocationSDescription: "Allow users to select a location using these methods."
        }
    })
});