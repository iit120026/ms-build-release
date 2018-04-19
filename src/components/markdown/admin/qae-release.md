# MS Admin App Release Notes.

# v1.0.0.0

- #### v1.0.8.18
    * 16th April 2018
        1. BUGFIX: BUGFIX: Booking status missing from the table. This is fixed. MA-33
        2. BUGFIX: Host details section optional phone number validation issue fixed. Field accepted alpha values and when numberics are entered max count validation stoped  working.
        3. FEATURE: Added contact person name 2 and mobile number 2. MA-42
        4. IMPROVEMENT: Cancellation policy details added. MA-44
        5. IMPROVEMENT: Sorting space rules by alphabetic order. MA-45".
        6. IMPROVEMENT: Disabling update button when there are user input validation errors. MA-47
 
        
**`QABUILD:: ByJYY1G3f`**
**`BUILD TIMESTAMP (UTC):: 1523870070819`**

---------------------------------------------
        
- #### v1.0.7.17
    * 9th April 2018
        1. BUGFIX: Block based - Per guest pricing:Scenario: refer *s1*. This issue is fixed
        2. BUGFIX: Block based - Space only pricing:Scenario: refer *s2*. This if fixed
        3. BUXFIX: MA-51 fixed.

##### *s1*

1. Number of per guest blocks: > 2
2. User produces 2 repeated blocks.
3. User removes one block from non-repeated blocks.
4. The validation get cleared.

 `Expected: Validation should only be cleared only if a repeated block is removed.`

##### *s2*

* Same as s1

 `Expected: Validation should only be cleared only if a repeated block is removed.`
        
**`QABUILD:: B1w-lY_if`**
**`BUILD TIMESTAMP (UTC):: 1523253247010`**

---------------------------------------------

- #### v1.0.7.16
    * 6th April 2018
        1. BUGFIX: Minimum number of guest can't exceed maximum participant count. A validation rule is added to test this.
        2. BUGFIX: Margin values for number inputs have been corrected.
        3. REFACTORING: DRY applied to `DetailsAndAccessibility` validations.
        4. REFACTORING: DRY applied to `PricingAndAvailability` validations.
        
**`QABUILD:: rJUSAp4oM`**
**`BUILD TIMESTAMP (UTC):: 1523011134310`**

---------------------------------------------

- #### v1.0.7.15
    * 5th April 2018
        1. BUGFIX: When change from one block type to another repeated block validation stoped working. This is fixed now.
        2. BUGFIX: When cancellation policy section is opened the linter complains about component keys as `Warning: Each child in an array or iterator should have a unique "key" prop.`. This is fixed now.
        3. BUGFIX: MA-56 is fixed for both block charge type.
        
**`QABUILD:: S19vwO7oz`**
**`BUILD TIMESTAMP (UTC):: 1522923362348`**

---------------------------------------------


- #### v1.0.7.14
    * 5th April 2018
        1. BUGFIX: Minimum number of guests only accepts positive integers now.
        2. BUGFIX: MA-54 fixed on both (space only, per guest]).
        3. BUGFIX: MA-55 Fixed on both (Space only and per guest).
        4. BUGFIX: Changing per guest from time does not clear the repeated box validation. This has beeen fixed now.

        
**`QABUILD:: SJ1cb87iz`**
**`BUILD TIMESTAMP (UTC):: 1522913670566`**

---------------------------------------------

- #### v1.0.7.13
    * 4th April 2018
        1. BUGFIX: Added field for measurement unit.
        2. IMPROVEMENT: Button name consistency save => update.
        3. IMPROVEMENT: Added buffer time description. (Hrs)

        
**`QABUILD:: B1vsFWMsG`**
**`BUILD TIMESTAMP (UTC):: 1522829727001`**

---------------------------------------------


- #### v1.0.6.12
    * 4th April 2018
        1. BUGFIX: Added charging block titles  and changed name from add field => add a block. (related: MA-31)
        2. BUGFIX: MA-39 These fields accepts Integers only.
        3. BUGFIX: Issue fixed min Participant Count (minParticipantCount) is getting set properly (API related)
        4. BUGFIX: Issue fixed max participant count is set properly (Prop: participantCount) (API related)
        5. BUGFIX: MA-40 Invalid assignement of values are corrected.

        
**`QABUILD:: HJr0AeGjz`**
**`BUILD TIMESTAMP (UTC):: 1522826957015`**

---------------------------------------------


- #### v1.0.6.11
    * 4th April 2018
        1. BUGFIX: Estimated square footage accepted negetive numbers. This is fixed now.
        2. BUGFIX: Estimated square footage returns a compilation error when it contains value `undefined`. This is fixed.
        3. BUGFIX: Seating arrangement input field accepts negetive numbers. This is fixed.
        4. BUGFIX: When seating arrangements input fields contains any falsy value it returns an `uncaught error`. This is fixed.
        5. BUGFIX: When trying to validate unit price it fails to access the length of value as a result it returns ann `uncaught error` this issue is fixed.
        6. BUGFIX: Unit price only accepts positive numbers now.
        7. BUGFIX: Removed valid till clear icon.
        8. BUGFIX: Space only block price doesnt return `uncaught error` for falsy values anymore.
        9. BUGFIX: Space only block price accepts only positive digits now.
        10. BUGFIX: Per guest based Min. Price per guest field accepts only positive digits.
        11. BUGFIX: Per guest based Min. Price per guest 3rd field doesnt clone values from 1st row (with key 1).

        
**`QABUILD:: r17b-lfiz`**
**`BUILD TIMESTAMP (UTC):: 1522823419479`**

---------------------------------------------

- #### v1.0.6.10
    * 2nd April 2018
        1. BUGIFX: MA-46 done
        2. BUGFIX: MA-48 done
        3. BUGFIX: Renamed managed bookings => manage bookings.
        4. BUGFIX: Managed bookings `Dates => Event Date`.
        5. BUGFIX: MA-43 done.
        6. BUGFIX: Validaing amenity unit price.
        7. BUGFIX: MA-37 done.
        8. BUGFIX: MA-32 - done in space only pricing.

        
**`QABUILD:: rJ0vJ9yiz`**
**`BUILD TIMESTAMP (UTC):: 1522667366435`**

---------------------------------------------

- #### v1.0.6.9
    * 2nd April 2018
        1. BUGIFX: MA-31 done
        2. BUGIFX: MA-39 done
        3. BUGIFX: MA-41 done
        4. BUGIFX: MA-43 done
        5. BUGFIX: Added seating arrangement field validations.


**`QABUILD:: ByW9rDksf`**
**`BUILD TIMESTAMP (UTC):: 1522656648565`**

---------------------------------------------

- #### v1.0.6.8
    * 2nd April 2018
        1. BUGIFX: Fixed repeated key issue which triggered pricing and availability repeated blocks validation with every select menu change.
        2. BUGFIX: Convert 12 hours clock time before sending the updated data back to server
        3. BUGFIX: There was an issues of changing from per guest to space only the new blocks not getting saved. This is fixed now
        4. BUGFIX: MA-29 done.
        5. BUGFIX: MA-32 done.
        6. BUGFIX: MA-34 done.
        7. BUGFIX: MA-35 done.
        8. BUGFIX: MA-37 done.
        9. BUGFIX: MA-38 done.
        10. BUGFIX: MA-40 done.

  
**`QABUILD:: SJoUsL1of`**
**`BUILD TIMESTAMP (UTC):: 1522654035444`**

---------------------------------------------


- #### v1.0.6.7
    * 29th Mar 2018
        1. BUGFIX: Added astrick `*` mark to required fields in Bank details component.
        2. BUGIFX: MA-17 - Shows number of items in the page and the total number of unverified tentetive bookings.
        3. BUGFIX: MA-25 - All the issues are fixed. The participant count field has been removed.
        4. BUGFIX: MA-47 - This has been fixed. Validation logic was incorrect as it was testing values less than  99999 Correction: `value >= 1000000`.
        5. BUGFIX: MA-27 - Image resize constraints added to Cloudinery widget.
        6. BUGFIX: MA-49 - Images can be uploaded and additional styles have been added to show a rectangle. Bin icon is hidden when theres an image.
        7. BUGFIX: MA-28 - Icon placement is bottom right.
        8. BUGFIX: MA-30 - Issue is fixed. Validation constraints have been added.


**`QABUILD:: ryIGvZqcf`**
**`BUILD TIMESTAMP (UTC):: 1522304782320`**

---------------------------------------------

- #### v1.0.6.6
    * 28th Mar 2018
        1. BUGFIX: Added astrick `*` mark to required fields in Bank details component.
        2. BUGFIX: Account holder name accept spaces now.
        3. BUGFIX: Typo - `Filed` corrected to `Field`.
        4. BUGFIX: Now bank account field accepts numbers only.
        5. BUGFIX: Disabling update button when there are repeated time blocks.
        6. BUGFIX: Enabling update button and add field on block charge type changes.
        
            
**`QABUILD:: Sy-8h6ucz`**
**`BUILD TIMESTAMP (UTC):: 1522224200743`**

---------------------------------------------

- #### v1.0.6.5
    * 27th Mar 2018
        1. BUGFIX: Removed rules that prevent the user from entering spaces in host name field.
        2. BUGFIX: Removed rules that prevent the user from entering spaces in account holder name field.
        3. IMPROVEMENT: Added a panel to delete and upload menu.
        4. IMPROVEMENT: Re-fetching pricing and availability menues with success 

**`QA BUILD:: rkkbYdvqM`**
**`QA BUILD TIMESTAMP (UTC):: 1522137334812`**

---------------------------------------------
        

- #### v1.0.5.4
    * 26th Mar 2018
        1. IMPROVEMENT: Add additional validation for Host details contact person name (required, character range: 1 - 60, can not contain special characters or numbers).
        2. IMPROVEMENT: Add additional validation rules for Basic space info space name (required, character range: 1 - 40).
        3. IMPROVEMENT: Add additional validation rules for Basic space info Organization name ( character range: 0 - 40).
        4. IMPROVEMENT: Add additional validation rules for Basic space info Space description ( required, character range: 1 - 300).
        5. IMPROVEMENT: Add additional validation rules for Space details and accessibility estimated square footage ( required, range 1 - 999,999).
        6. IMPROVEMENT: Add additional validation rules for Space details and accessibility Participant count  ( required ).
        7. IMPROVEMENT: Add additional validation rules for Bank account details Account holder name ( required, can not contain special chars and numbers, character length 1 - 70 ).
        8. IMPROVEMENT: Add additional validation rules for Bank account details branch name ( required, character length 1 - 60 ).
        9. IMPROVEMENT: Add additional validation rules for Bank account details bank name ( required, ccharacter length 1 - 50 ).

**`QA BUILD:: BJMg6889z`**
**`QA BUILD TIMESTAMP (UTC):: 1522064618105`**

---------------------------------------------


- #### v1.0.4.4

    #### This release focuses on space edit - Pricing and availability component.
    
    * 26th Mar 2018
        1. IMPROVEMENT: Revamping per hour pricing section for improved performance.
        2. IMPROVEMENT: Revamping Block based pricing section (per guest and space only) for improved performance.
        3. IMPROVEMENT: Validating min host notice period (Required, Range 0-999).
        4. IMPROVEMENT: Input validation block based pricing - space only - block price (Required).
        5. IMPROVEMENT: Input validation block based based pricing - space only - block price (Required).
        6. IMPROVEMENT: Input validation block based pricing - per guest - Min. Price per guest (Required, 99, 9999).
        7. IMPROVEMENT: Input validation block based pricing - per guest - Min. number of guests (Required, 99, 9999).
        8. IMPROVEMENT: Input validation per hour pricing - charge per hour (Required, 9,99,9999).
        9. BUGFIX: MA-5 component is re-written to meet these requirements.


**`QA BUILD:: Hk42hNLcG`**
**`QA BUILD TIMESTAMP (UTC):: 1522056363654`**

---------------------------------------------


- #### v1.0.3.3

    * 21st Mar 2018
        1. IMPROVEMENT: Removing fixed columns of spaces table to adapt the screen width.
        2. IMPROVEMENT: Removing fixed columns of transactions table to adapt the screen width.
        3. IMPROVEMENT: Removing fixed columns of managed bookings table to adapt the screen width.
        4. IMPROVEMENT: Removing fixed columns of tentetive bookings table to adapt the screen width.
        5. IMPROVEMENT: Showing time in 12 hours clock time.
        6. IMPROVEMENT: Showing remaining character count in space description.
        7. BUGFIX: Now routing works properly when routing back to managed bookings screen from space edit.
        8. BUGFIX: MA-16 - Now redux store's tentetive booking portion gets rehydrated from remote db.
        9. BUGFIX: MA-18 - This is fixed. The timestamp received through the api call was a string. As a fix when the time is rendered, it is typecasted to a Number before passing to moment parser.
        10. BUGFIX: MA-24 - This issue is fixed. Map search field's placeholder has been set and fields have been validated. Space description field can still be resized while minimum height is set to 100 pixes.


**`QA BUILD:: S1dhW9k5z`**
**`QA BUILD TIMESTAMP (UTC):: 1521619376096`**

---------------------------------------------
        

- #### v1.0.2.2

    * 19th Mar 2018
        1. IMPROVEMENT: Refetching space details once the data is stored in remote db. This will automatically refresh the space details edit data.
        2. IMPROVEMENT: Space Details and Accessibility number formatting.
        3. IMPROVEMENT: Refreshing data on tentetive bookings table when a booking is confirmed
        4. BUGFIX - MA-13 A proper notification massage added.
        5. BUGFIX: Fixing estimated square footage / meterage validation error.


**`QA BUILD:: SkCrxGaFM`**
**`QA BUILD TIMESTAMP (UTC):: 1521455174371`**

---------------------------------------------


- #### v1.0.1.1

    * 15th Mar 2018
        1. IMPROVEMENT: Host Details common form field validation.
        2. IMPROVEMENT: Basic Space Info common form field validation.
        3. BUGFIX: MA-20 - Removed notification and added pop confirm for image remove.
        4. BUGFIX: MA-21 - Reordered Space editing panels.
        5. BUGFIX: MA-22 - React map component location issue fixation.


**`QA BUILD:: rJwv1yuFf`**
**`QA BUILD TIMESTAMP (UTC):: 1521114974915`**