export interface AccessoryOption {
    label: string;
    src: string | null;
}

export type AccessoryOptions = {
    hat: AccessoryOption[];
    accessory: AccessoryOption[];
    hand: AccessoryOption[];
    head: AccessoryOption[];
    outfit: AccessoryOption[];
    background: AccessoryOption[];
};

export const accessoriesOptions: AccessoryOptions = {

    head: [
        { label: "None", src: "/PFP-webp/head/head4.webp" },
        { label: "Head 1", src: "/PFP-webp/head/head1.webp" },
        { label: "Head 2", src: "/PFP-webp/head/head2.webp" },
        { label: "Head 3", src: "/PFP-webp/head/head3.webp" },
        { label: "Head 4", src: "/PFP-webp/head/head4.webp" },
        { label: "Head 5", src: "/PFP-webp/head/head5.webp" },
        { label: "Head 6", src: "/PFP-webp/head/head6.webp" },
        { label: "Head 7", src: "/PFP-webp/head/head7.webp" },
        { label: "Head 8", src: "/PFP-webp/head/head8.webp" },
        { label: "Head 9", src: "/PFP-webp/head/head9.webp" },
        { label: "Head 10", src: "/PFP-webp/head/head10.webp" },
        { label: "Head 11", src: "/PFP-webp/head/head11.webp" },
        { label: "Head 12", src: "/PFP-webp/head/head12.webp" },
        { label: "Head 13", src: "/PFP-webp/head/head13.webp" },
        { label: "Head 14", src: "/PFP-webp/head/head14.webp" },
        { label: "Head 15", src: "/PFP-webp/head/head15.webp" },
        { label: "Head 16", src: "/PFP-webp/head/head16.webp" },
    ],
    hand: [
        { label: "None", src: null },
        { label: "Hand 1", src: "/PFP-webp/hand/hand1.webp" },
        { label: "Hand 2", src: "/PFP-webp/hand/hand2.webp" },
        { label: "Hand 3", src: "/PFP-webp/hand/hand3.webp" },
        { label: "Hand 4", src: "/PFP-webp/hand/hand4.webp" },
        { label: "Hand 5", src: "/PFP-webp/hand/hand5.webp" },
        { label: "Hand 6", src: "/PFP-webp/hand/hand6.webp" },
        { label: "Hand 7", src: "/PFP-webp/hand/hand7.webp" },
        { label: "Hand 8", src: "/PFP-webp/hand/hand8.webp" },
        { label: "Hand 9", src: "/PFP-webp/hand/hand9.webp" },
        { label: "Hand 10", src: "/PFP-webp/hand/hand10.webp" },
        { label: "Hand 11", src: "/PFP-webp/hand/hand11.webp" },
        { label: "Hand 12", src: "/PFP-webp/hand/hand12.webp" },
        { label: "Hand 13", src: "/PFP-webp/hand/hand13.webp" },
        { label: "Hand 14", src: "/PFP-webp/hand/hand14.webp" },
        { label: "Hand 15", src: "/PFP-webp/hand/hand15.webp" },
        { label: "Hand 16", src: "/PFP-webp/hand/hand16.webp" },

    ],
    hat: [
        { label: "None", src: null },
        { label: "Hat 1", src: "/PFP-webp/hat/hat1.webp" },
        { label: "Hat 2", src: "/PFP-webp/hat/hat2.webp" },
        { label: "Hat 3", src: "/PFP-webp/hat/hat3.webp" },
        { label: "Hat 4", src: "/PFP-webp/hat/hat4.webp" },
        { label: "Hat 5", src: "/PFP-webp/hat/hat5.webp" },
        { label: "Hat 6", src: "/PFP-webp/hat/hat6.webp" },
        { label: "Hat 7", src: "/PFP-webp/hat/hat7.webp" },
        { label: "Hat 8", src: "/PFP-webp/hat/hat8.webp" },
        { label: "Hat 9", src: "/PFP-webp/hat/hat9.webp" },
        { label: "Hat 10", src: "/PFP-webp/hat/hat10.webp" },
        { label: "Hat 11", src: "/PFP-webp/hat/hat11.webp" },
        { label: "Hat 12", src: "/PFP-webp/hat/hat12.webp" },
        { label: "Hat 13", src: "/PFP-webp/hat/hat13.webp" },
        { label: "Hat 14", src: "/PFP-webp/hat/hat14.webp" },
        { label: "Hat 15", src: "/PFP-webp/hat/hat15.webp" },
        { label: "Hat 16", src: "/PFP-webp/hat/hat16.webp" },
    ],
    outfit: [
        { label: "None", src: '/PFP-webp/outfit/body.webp' },
        { label: "Outfit 1", src: "/PFP-webp/outfit/outfit1.webp" },
        { label: "Outfit 2", src: "/PFP-webp/outfit/outfit2.webp" },
        { label: "Outfit 3", src: "/PFP-webp/outfit/outfit3.webp" },
        { label: "Outfit 4", src: "/PFP-webp/outfit/outfit4.webp" },
        { label: "Outfit 5", src: "/PFP-webp/outfit/outfit5.webp" },
        { label: "Outfit 6", src: "/PFP-webp/outfit/outfit6.webp" },
        { label: "Outfit 7", src: "/PFP-webp/outfit/outfit7.webp" },
        { label: "Outfit 8", src: "/PFP-webp/outfit/outfit8.webp" },
        { label: "Outfit 9", src: "/PFP-webp/outfit/outfit9.webp" },
        { label: "Outfit 10", src: "/PFP-webp/outfit/outfit10.webp" },
        { label: "Outfit 11", src: "/PFP-webp/outfit/outfit11.webp" },
        { label: "Outfit 12", src: "/PFP-webp/outfit/outfit12.webp" },
        { label: "Outfit 13", src: "/PFP-webp/outfit/outfit13.webp" },
        { label: "Outfit 14", src: "/PFP-webp/outfit/outfit14.webp" },
        { label: "Outfit 15", src: "/PFP-webp/outfit/outfit15.webp" },
        { label: "Outfit 16", src: "/PFP-webp/outfit/outfit16.webp" },
    ],
    accessory: [
        { label: "None", src: null },
        { label: "Accessory 1", src: "/PFP-webp/accessory/accessory1.webp" },
        { label: "Accessory 2", src: "/PFP-webp/accessory/accessory2.webp" },
        { label: "Accessory 3", src: "/PFP-webp/accessory/accessory3.webp" },
        { label: "Accessory 4", src: "/PFP-webp/accessory/accessory4.webp" },
        { label: "Accessory 5", src: "/PFP-webp/accessory/accessory5.webp" },
        { label: "Accessory 6", src: "/PFP-webp/accessory/accessory6.webp" },
        { label: "Accessory 7", src: "/PFP-webp/accessory/accessory7.webp" },
        { label: "Accessory 8", src: "/PFP-webp/accessory/accessory8.webp" },
        { label: "Accessory 9", src: "/PFP-webp/accessory/accessory9.webp" },
        { label: "Accessory 10", src: "/PFP-webp/accessory/accessory10.webp" },
        // Add other Accessory here...
    ],
    background: [
        { label: "#1398FD", src: "#1398FD" },
        { label: "#206B0F", src: "#206B0F" },
        { label: "#FF00CF", src: "#FF00CF" },
        { label: "#131C6A", src: "#131C6A" },
        { label: "#FDDD10", src: "#FDDD10" },
        { label: "#FF5C00", src: "#FF5C00" },
        { label: "#FF0000", src: "#FF0000" },
        { label: "#9A53FF", src: "#9A53FF" },
        { label: "#2BFF00", src: "#2BFF00" },
        { label: "#B76A5F", src: "#B76A5F" },
        { label: "#E6FFB8", src: "#E6FFB8" },
        { label: "#B7E5FF", src: "#B7E5FF" },
        { label: "#036265", src: "#036265" },
        { label: "#241512", src: "#241512" },
        { label: "#2400FF", src: "#2400FF" },
        { label: "#141414", src: "#141414" },
    ],
};
