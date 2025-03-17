pub contract CodeMarketplace {

    pub struct CodeListing {
        pub let id: UInt64
        pub let owner: Address
        pub let title: String
        pub let description: String
        pub let price: UFix64
        pub let codeHash: String
        pub let active: Bool

        init(
            id: UInt64,
            owner: Address,
            title: String,
            description: String,
            price: UFix64,
            codeHash: String
        ) {
            self.id = id
            self.owner = owner
            self.title = title
            self.description = description
            self.price = price
            self.codeHash = codeHash
            self.active = true
        }
    }

    access(all) var listings: {UInt64: CodeListing}
    access(all) var nextListingID: UInt64

    pub fun createListing(
        title: String,
        description: String,
        price: UFix64,
        codeHash: String
    ) {
        let listing = CodeListing(
            id: self.nextListingID,
            owner: self.account.address,
            title: title,
            description: description,
            price: price,
            codeHash: codeHash
        )
        
        self.listings[self.nextListingID] = listing
        self.nextListingID = self.nextListingID + 1
    }

    pub fun purchaseListing(listingID: UInt64) {
        pre {
            self.listings[listingID] != nil: "Listing does not exist"
            self.listings[listingID]?.active == true: "Listing is not active"
        }
        
        // Payment logic would go here
        
        self.listings[listingID]?.active = false
    }

    init() {
        self.listings = {}
        self.nextListingID = 1
    }
}