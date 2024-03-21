# [1.7.0](https://github.com/aldra-consulting/platform-web/compare/1.6.0...1.7.0) (2024-03-21)


### Bug Fixes

* only show call to action for active missions ([2334b86](https://github.com/aldra-consulting/platform-web/commit/2334b86d405299d927f75d8905c8cbfb10f51ad0))
* use correct image size when fetching it from Sanity CDN ([38a8d41](https://github.com/aldra-consulting/platform-web/commit/38a8d41632cdaade3f5ef4d17355e60713d63c9d))


### Features

* add 'client' util ([a223d1b](https://github.com/aldra-consulting/platform-web/commit/a223d1b01ece1c30cbc0920903d20c2af65c1537))
* add 'image' util ([e23ef67](https://github.com/aldra-consulting/platform-web/commit/e23ef6744f9a27db8ed0eb5eb61aaa0fe143f0e4))
* implement 'isBrowser' utility function ([6ab8a5a](https://github.com/aldra-consulting/platform-web/commit/6ab8a5a3ad11ee72865a8007b24b30d1c04080f0))
* implement 'isNode' utility function ([cf66ddf](https://github.com/aldra-consulting/platform-web/commit/cf66ddf40e716d17ad3c50c2ebb5f2b325c492f5))

# [1.6.0](https://github.com/aldra-consulting/platform-web/compare/1.5.0...1.6.0) (2024-03-20)


### Bug Fixes

* crop avatar image ([a7d92ec](https://github.com/aldra-consulting/platform-web/commit/a7d92ece562b05517771740faf70ec7e4981d305))
* minor CSS bugs in qualification requirement component ([9d66cc1](https://github.com/aldra-consulting/platform-web/commit/9d66cc1bd42853931fe4972bac0c30a00d8fea37))
* mission header styles ([75bdad2](https://github.com/aldra-consulting/platform-web/commit/75bdad2e1464504e4cd894c96bde0bee095bcfc7))
* mission header styles ([35c2218](https://github.com/aldra-consulting/platform-web/commit/35c2218ca74d1513c55e9401c5071a5e23118060))
* render roles only if there are any ([9fe1612](https://github.com/aldra-consulting/platform-web/commit/9fe1612911fd6b7edb07ab129309f0795527bd58))
* use correct link for phone number ([60a54fe](https://github.com/aldra-consulting/platform-web/commit/60a54fe981c5c5951c191d16432c0f5400ddd39d))
* use Husky isntall script ([148d97b](https://github.com/aldra-consulting/platform-web/commit/148d97b8646c1e55c9cd478055bea425b4374717))


### Features

* add 'awardCriteria' field to Mission document ([0a6fc1b](https://github.com/aldra-consulting/platform-web/commit/0a6fc1bdb393510089f33caab8d3c42a980874d0))
* add 'brief' field to Sanity Mission document ([b1c3a43](https://github.com/aldra-consulting/platform-web/commit/b1c3a435975b33e0b6ceb94d2e2ef04840f26cf4))
* add 'details' field to Mission document ([a359b59](https://github.com/aldra-consulting/platform-web/commit/a359b59551d8ac1f36bfc1cdeb02c82a636db374))
* add 'languageRequirements' field to Mission document ([75f25f5](https://github.com/aldra-consulting/platform-web/commit/75f25f52e8fe75fddd0a6a000b9f733a2a3545f5))
* add 'roles' field to Mission document ([8833e26](https://github.com/aldra-consulting/platform-web/commit/8833e2681c8ed59d05b0ea2e7899f1715bcadf2a))
* add award criteria mapping on Mission entity ([e90b150](https://github.com/aldra-consulting/platform-web/commit/e90b1506dd489c6438c7100d794b587bf0ea400d))
* add Client document reference to Mission document ([574e433](https://github.com/aldra-consulting/platform-web/commit/574e433f774109372aab64a4ab1600b4fe4eec85))
* add CommonReferenceLevel Sanity document type ([20d65c3](https://github.com/aldra-consulting/platform-web/commit/20d65c35fd88c0b0f1e82d2eef1ccc27b858f7b1))
* add Criterion entity type ([884ecbe](https://github.com/aldra-consulting/platform-web/commit/884ecbee633c2889b56ea13395bfcdd16c8f8bd9))
* add Criterion Sanity document type ([1fa90b5](https://github.com/aldra-consulting/platform-web/commit/1fa90b5d81b45d650bc5405ebbe21c7c177ecb72))
* add Described interface to Mission entity ([16f2015](https://github.com/aldra-consulting/platform-web/commit/16f20153762e38e78a032543ec1d4b4b6b8b1cbc))
* add Language Sanity document type ([9237cab](https://github.com/aldra-consulting/platform-web/commit/9237cabe91f48e2553a5ba903edfd74ef440d330))
* add LanguageRequirement Sanity object type ([cc102b9](https://github.com/aldra-consulting/platform-web/commit/cc102b9a1627b62db9b4272d1587226627786545))
* add Mission Sanity document type ([69d11af](https://github.com/aldra-consulting/platform-web/commit/69d11aff7a6309f3a12f470859a343dba731393b))
* add Person entity type and use it instead of Representative entity type ([be6dfd3](https://github.com/aldra-consulting/platform-web/commit/be6dfd37a1421051b5c78f778a5e7f05466f1829))
* add Person Sanity document type ([045500b](https://github.com/aldra-consulting/platform-web/commit/045500b15367508d72fa9f4ca969530a99804ca2))
* add Sanity 'QualificationRequirement' object to 'QualificationRequirement' entity converter ([4dbb305](https://github.com/aldra-consulting/platform-web/commit/4dbb3054cbb7c8e86cf791bc2d436f1babb9f48e))
* add Sanity 'Role' object to 'Role' entity converter ([d523f34](https://github.com/aldra-consulting/platform-web/commit/d523f346937e3a5346cab051cd0b49650c177978))
* add Sanity AwardCriterion object to AwardCriterion entity converter ([1126bf7](https://github.com/aldra-consulting/platform-web/commit/1126bf75842602370ba3faf8a48859835e9cd4ac))
* add Sanity Criterion document to Criterion entity converter ([24a30e9](https://github.com/aldra-consulting/platform-web/commit/24a30e954e5d7f198de567a9f21de4e74d45eeab))
* add Sanity Detail object to Detail entity converter ([77ffc2b](https://github.com/aldra-consulting/platform-web/commit/77ffc2b30502a61ae38a4dbc93ac8de420c8bd4b))
* add Sanity Language document to Language entity converter ([81ad56b](https://github.com/aldra-consulting/platform-web/commit/81ad56bc8a523df832e6876fa82177f1283bb9f3))
* add Sanity LanguageRequirement object to LanguageRequirement entity converter ([17fb51e](https://github.com/aldra-consulting/platform-web/commit/17fb51eb8d36c8a08ea642f5e3432225ac3487b7))
* add Sanity Mission document to Mission entity converter ([3857055](https://github.com/aldra-consulting/platform-web/commit/38570555a04c20600a888551efe30e7ba15b7287))
* add Sanity Mission repository implementation ([b0c72ec](https://github.com/aldra-consulting/platform-web/commit/b0c72ecc4ee1e3a2ffc138607ac4e10d9b53c7c3))
* add Sanity Person document to Person entity converter ([51ff575](https://github.com/aldra-consulting/platform-web/commit/51ff575b17e89a1f229a9b5eecc427146c66d834))
* add status field to Mission document ([1a4957d](https://github.com/aldra-consulting/platform-web/commit/1a4957d3076abf6f76b5d48088aa010615d9050d))
* add useClientContext hook ([08f681e](https://github.com/aldra-consulting/platform-web/commit/08f681ece1c07d8eb98d59c5a17c4da9a1ba8d03))
* change ID type of Mission entity ([bca5cb0](https://github.com/aldra-consulting/platform-web/commit/bca5cb0088d0115d08168c408c9eb5148d2cca49))
* connect Mission entity service to Sanity API ([013494f](https://github.com/aldra-consulting/platform-web/commit/013494f479e2d78aa747aad8614ddc85e3e89b0d))
* expand Client reference on Mission document ([d6477fb](https://github.com/aldra-consulting/platform-web/commit/d6477fb175027f839a9b064271b444854e8f8286))
* expose 'details' field on Mission entity ([bd69d46](https://github.com/aldra-consulting/platform-web/commit/bd69d46e52592d1b40bbd82d62e38794a6120fbf))
* expose 'representative' field on Mission entity ([1d9c4b2](https://github.com/aldra-consulting/platform-web/commit/1d9c4b2180889b0d5d0e82915c6e960220206e47))
* expose 'roles' field on Mission entity ([4ac89ac](https://github.com/aldra-consulting/platform-web/commit/4ac89ac7fb369056abe48a23b3fd3015fdab9166))
* extend MissionEnityService with 'findManyForClient' method ([4bea11a](https://github.com/aldra-consulting/platform-web/commit/4bea11a4fd54dc3fd8c7f845284e76d7ae679473))
* extend MissionSanityRepository with 'findManyForClient' method ([ab37d9f](https://github.com/aldra-consulting/platform-web/commit/ab37d9f0c2b512ac6568d764476e587df82af67a))
* implement language requirements on a Mission entity ([99f947f](https://github.com/aldra-consulting/platform-web/commit/99f947fc9da375dea423dc2997e11d50cd1e4483))
* load data client-side ([a32e016](https://github.com/aldra-consulting/platform-web/commit/a32e016f28dd59f93413ae5ea7419313ab7d14fb))
* load data client-side ([0bd4ba9](https://github.com/aldra-consulting/platform-web/commit/0bd4ba929503274e2f15fe60e9990f15adec5eb9))
* load data client-side ([4c8e040](https://github.com/aldra-consulting/platform-web/commit/4c8e040093063fb8b9ec10b8de055ddd3d63afa1))
* load data client-side ([438b12e](https://github.com/aldra-consulting/platform-web/commit/438b12e920a33346b866f046e03c6b63e99642bf))
* load data client-side ([6b47478](https://github.com/aldra-consulting/platform-web/commit/6b47478113587db68a3b2b3cf5595415fbc37c5e))
* make 'details' attribute of Mission entity non-nullable ([4beb6e8](https://github.com/aldra-consulting/platform-web/commit/4beb6e858afb032c9a2a850d63746e0f87e4b2fa))
* make 'representative' attribute of Mission entity non-nullable ([e8e45ec](https://github.com/aldra-consulting/platform-web/commit/e8e45ec929c7813ac301423fb1b65bca398f9ab1))
* make awardCriteria attribute of Mission entity non-nullable ([bf039d4](https://github.com/aldra-consulting/platform-web/commit/bf039d4ad88adb29cfeb59850f80ac56c5cedb5c))
* remove Nameable interface from Client entity ([044099a](https://github.com/aldra-consulting/platform-web/commit/044099a7fe15c6a33f04390d7a074b2f874fe773))
* replace Nameable interface in Mission entity with Labelled interface ([1562b87](https://github.com/aldra-consulting/platform-web/commit/1562b87a14d0815516f29d0d02d87787a82258a1))
* use Link component in Card link action ([a994873](https://github.com/aldra-consulting/platform-web/commit/a994873db14ca3aea64d3ab789f1629f193a523a))
* use new service method to fetch missions for a given client ([f9beedb](https://github.com/aldra-consulting/platform-web/commit/f9beedb504de662afbae36edb3b9836b1ba36fbf))

# [1.5.0](https://github.com/aldra-consulting/platform-web/compare/1.4.0...1.5.0) (2024-03-10)


### Bug Fixes

* add styles for the case where no clients exist ([c05f67a](https://github.com/aldra-consulting/platform-web/commit/c05f67a0eae38ea1d2e956e93d61805737558b0a))


### Features

* load data client-side ([789949c](https://github.com/aldra-consulting/platform-web/commit/789949c18bacef3f84bcfa13210d5925cafa6128))

# [1.4.0](https://github.com/aldra-consulting/platform-web/compare/1.3.0...1.4.0) (2024-03-10)


### Features

* add Client Sanity document type ([f12d5a3](https://github.com/aldra-consulting/platform-web/commit/f12d5a3646e6e2a493944ec0c7c792d08e37b371))
* add Sanity Client document to Client entity converter ([ff22837](https://github.com/aldra-consulting/platform-web/commit/ff22837bdce2774698e3eaa59ee56d515336a78c))
* add Sanity Client repository implementation ([005126c](https://github.com/aldra-consulting/platform-web/commit/005126c59aa9e85aa6c4ee903c3fff6ab8c850ac))
* add useClientId hook ([73b8058](https://github.com/aldra-consulting/platform-web/commit/73b80583e5546bb932bad16c1bfca60fef50cb02))
* add Vite environment plugin ([009523d](https://github.com/aldra-consulting/platform-web/commit/009523dccbcf2e025885a6747d45ea40e92344e7))
* change ID type of Client entity ([18f5642](https://github.com/aldra-consulting/platform-web/commit/18f56426fe20aabfe12b7cd37a2016cf48432184))
* connect Client entity service to Sanity API ([a097fa1](https://github.com/aldra-consulting/platform-web/commit/a097fa185c2d34d90279a1242e553a9ec423359c))
* ensure environment is configured correctly ([82fb66b](https://github.com/aldra-consulting/platform-web/commit/82fb66bdba11e586349478aa7429b04dfa435ead))
* extend EntityService in ClientService ([14ce6cc](https://github.com/aldra-consulting/platform-web/commit/14ce6cc61041785d62a7faf03130c65d370173a6))
* implement a function to get a global object ([c77795c](https://github.com/aldra-consulting/platform-web/commit/c77795cf931c3fa8647decc3e5e04d0308e52542))
* implement generic entity service ([4b32f8a](https://github.com/aldra-consulting/platform-web/commit/4b32f8abd658b609beb5a0f2ccd5f75897528f9e))
* parametrise output type of useDefinedParam hook ([5083d23](https://github.com/aldra-consulting/platform-web/commit/5083d2332794386631b1a4b9b997d758ec85f214))

# [1.3.0](https://github.com/aldra-consulting/platform-web/compare/1.2.1...1.3.0) (2024-03-01)


### Bug Fixes

* move data loading out of layout ([7018d54](https://github.com/aldra-consulting/platform-web/commit/7018d54618f212aa336a0fe87a8c6eb555c9e2b6))
* remove unused service worker ([a0d6b85](https://github.com/aldra-consulting/platform-web/commit/a0d6b85fdc07574e3f606e8e9d39c13e58b0855d))
* revert previous commit ([3074259](https://github.com/aldra-consulting/platform-web/commit/307425997f16b509eedfed3df29e40390049c104))
* use available assignment ID ([01f935b](https://github.com/aldra-consulting/platform-web/commit/01f935be050705019d0121116a2f7501f2e8ebc6))
* use available assignment ID and role ID ([3c94264](https://github.com/aldra-consulting/platform-web/commit/3c94264a2a91e0de52da0ec5e53fa8b00f0e2160))
* use client task whenever appropriate ([48d93f5](https://github.com/aldra-consulting/platform-web/commit/48d93f5399a6143e13a166ffe9fa8622539df85d))
* use correct types ([d1cb5af](https://github.com/aldra-consulting/platform-web/commit/d1cb5afa8356eedec4e98a44c8fcfcebb5ddb41a))


### Features

* add ClientResource component ([3e215be](https://github.com/aldra-consulting/platform-web/commit/3e215be045b094d6a7bd9856089b8222e304ce67))
* add isDefined utility function ([422fbdc](https://github.com/aldra-consulting/platform-web/commit/422fbdcde880980b0856d86a5e336240bde4fd57))
* add options to useClientResource hook ([e7792f4](https://github.com/aldra-consulting/platform-web/commit/e7792f48135d0e9a2378b52a0a090f0b847afcbb))
* add useAssignmentContext hook ([3e2dfc0](https://github.com/aldra-consulting/platform-web/commit/3e2dfc03a22915cb75472a7eda36e9ef45749706))
* add useAssignmentId hook ([8489aff](https://github.com/aldra-consulting/platform-web/commit/8489aff41346268c6221f2daf9bceb01380eb615))
* add useClientResource hook ([854a443](https://github.com/aldra-consulting/platform-web/commit/854a443a6d2784f81b4fda26ee65b3050d4498b0))
* add useClientTask hook and ClientTask component ([8b9685e](https://github.com/aldra-consulting/platform-web/commit/8b9685e337b7fd78f031586e4c457427b189febc))
* add useDefinedParam hook ([c5e5629](https://github.com/aldra-consulting/platform-web/commit/c5e56299bfba2ba8ba6ae0b778d07082cbdc5fd2))
* add useRoleContext hook ([d303962](https://github.com/aldra-consulting/platform-web/commit/d303962f7c8bed51c8b8e3fbdf5ecc0f019e175c))
* add useRoleId hook ([f8a5573](https://github.com/aldra-consulting/platform-web/commit/f8a5573b3cc0091fab737afa8b5a29145b08aa8d))
* change API of the Animated component ([987be56](https://github.com/aldra-consulting/platform-web/commit/987be56d8e17a8f09bcd5c94f5c9937a47dffbaa))
* implement Skeleton component ([87a0863](https://github.com/aldra-consulting/platform-web/commit/87a0863aca0a227975414678075549757336d411))
* use client resource to load assignment ([06c9c8f](https://github.com/aldra-consulting/platform-web/commit/06c9c8fdbd0bf8f60ccb397162d993262613eff4))
* use client resource to load assignment and role ([4d37a91](https://github.com/aldra-consulting/platform-web/commit/4d37a911f2eac7e4129e5e729052962b64ab51ba))
* use client resource to load assignments ([033c92f](https://github.com/aldra-consulting/platform-web/commit/033c92fe9eef245c8ccd710f00c50ae257e6c5fe))

## [1.2.1](https://github.com/aldra-consulting/platform-web/compare/1.2.0...1.2.1) (2024-02-21)


### Bug Fixes

* prevent prefetching ([a3ca8bf](https://github.com/aldra-consulting/platform-web/commit/a3ca8bf807b68de4939dda5dd3f3e150e0a7bcd1))

# [1.2.0](https://github.com/aldra-consulting/platform-web/compare/1.1.0...1.2.0) (2024-02-21)


### Bug Fixes

* add fallback value to animation delay ([31a2543](https://github.com/aldra-consulting/platform-web/commit/31a2543c0a1bba302d8df320ab41b29696c938b9))
* add minimum height to role ([e07c2d6](https://github.com/aldra-consulting/platform-web/commit/e07c2d694d61c804cf4ba09001cafc1d982b7bbe))
* add SSG handlers ([718e0c4](https://github.com/aldra-consulting/platform-web/commit/718e0c40c7cbcb59e088d6f16f4a96cf367fe58c))
* adjust page component styles ([d3769a0](https://github.com/aldra-consulting/platform-web/commit/d3769a00407133fe0e475cafc3efcb3cea708581))
* adjust page component styles ([e1cd721](https://github.com/aldra-consulting/platform-web/commit/e1cd721058ec5f328592f1ea185064d5ebd45fad))
* adjust typings for useReloadableResource hook ([f36826b](https://github.com/aldra-consulting/platform-web/commit/f36826b4bc740842da96e1a8662be84b5cfad36e))
* change card body background if it is the only child ([1194af0](https://github.com/aldra-consulting/platform-web/commit/1194af012d3e5390b2b19c0a60eada17937ba548))
* check whether avatar image can be shown ([deb2d12](https://github.com/aldra-consulting/platform-web/commit/deb2d124af701a943222fa97e6331a197eec5720))
* exclude components folders from SSG ([a76d4f3](https://github.com/aldra-consulting/platform-web/commit/a76d4f33529d631e83c9891fb0fe6de9f0046dc5))
* export store from useAuthenticatedUser hook ([daf5ef1](https://github.com/aldra-consulting/platform-web/commit/daf5ef1109e9e497d57ebed83aad0ceca4fb4fad))
* prevent toggling bookmark on first render ([ebb9d37](https://github.com/aldra-consulting/platform-web/commit/ebb9d37ae158e3d333e6d2a4b7db92eb8aef6042))
* remove root element styles in animated component ([bb84f2f](https://github.com/aldra-consulting/platform-web/commit/bb84f2fe589cc5a0efafe26e9bd99f4cc7f01272))
* style fixes in card component ([72d99ce](https://github.com/aldra-consulting/platform-web/commit/72d99cec98d7e72070c9e136e45baa3bce862304))


### Features

* add a small delay to assignment animation ([2cd07fd](https://github.com/aldra-consulting/platform-web/commit/2cd07fd695d885ab982b8b4ddc5ef77e6f320794))
* add animation to assignments ([ffb3378](https://github.com/aldra-consulting/platform-web/commit/ffb337885ea67c4c5dcfc345f8ae75c86a4ec744))
* add assignment component to assignments route ([9630a6c](https://github.com/aldra-consulting/platform-web/commit/9630a6c8858d8cd5be87c86ae7b85fb4db437972))
* add assignment roles route ([ff555a3](https://github.com/aldra-consulting/platform-web/commit/ff555a395c25efeecbd3c057792d72082b4a661d))
* add assignments route ([7fb6068](https://github.com/aldra-consulting/platform-web/commit/7fb60689e624a53b7402cc0c02afe52063b5ebdf))
* add branding to header ([356b7fc](https://github.com/aldra-consulting/platform-web/commit/356b7fcf48f260d9c02b3958749e4b01d92217eb))
* add client context ([311b263](https://github.com/aldra-consulting/platform-web/commit/311b263e1e7ef57b0bfb04f7ee590a79880d35be))
* add client provider ([3b8027f](https://github.com/aldra-consulting/platform-web/commit/3b8027f746788ec69113c165255b2b5feefda0a8))
* add client service implementation ([cd0645f](https://github.com/aldra-consulting/platform-web/commit/cd0645f2811dcb5498953acd2f8788fe51441ada))
* add client service interface ([cf5c9eb](https://github.com/aldra-consulting/platform-web/commit/cf5c9eb987d81559aaf68c125030b74f357b5224))
* add clients route ([420f633](https://github.com/aldra-consulting/platform-web/commit/420f6337b16584e4206fd503a728b7159ef36c29))
* add context, service and provider for Role entity ([3153897](https://github.com/aldra-consulting/platform-web/commit/3153897993a69b64866bae9196a7d6c9ca0d42cd))
* add duration to animated component ([c0e8981](https://github.com/aldra-consulting/platform-web/commit/c0e89819dc78b2b978f6f74b17bee9402134ba16))
* add global text color ([cf9c890](https://github.com/aldra-consulting/platform-web/commit/cf9c89043897fc843b618fe763ceb56116c8f8d0))
* add icons for all severities to alert component ([bc9dd29](https://github.com/aldra-consulting/platform-web/commit/bc9dd29fd23a6d7f4bb719d08aba1fef1dd0b9ec))
* add image to avatar component ([16a648a](https://github.com/aldra-consulting/platform-web/commit/16a648a011522fb59737eb96af5f074c412710bd))
* add isActive flag to assignment context ([16d11e3](https://github.com/aldra-consulting/platform-web/commit/16d11e38cb2ac57655592614ffd016ecfd96db24))
* add list method to assignment service ([7108a06](https://github.com/aldra-consulting/platform-web/commit/7108a068a1d044903b588d4c5eb952c686ffb00c))
* add method to get assignment by ID ([3633357](https://github.com/aldra-consulting/platform-web/commit/363335731f9e4e0760c9fe0465084f58b0b7ae45))
* add more details to assignment body ([b721340](https://github.com/aldra-consulting/platform-web/commit/b721340f0f3d593399312597fd2519f0bbdc7169))
* add multiple icon components ([1c4ae63](https://github.com/aldra-consulting/platform-web/commit/1c4ae634ba2333e406d79da135b66408b22245ef))
* add packages to sanitize HTML and convert Markdown to HTML ([765c965](https://github.com/aldra-consulting/platform-web/commit/765c965431e16c7892c2838214c1bff056a7c180))
* add selected assignment page ([7bb0051](https://github.com/aldra-consulting/platform-web/commit/7bb005188f5910c76ab97216abc71c15ee1f2868))
* add service namespace ([090f3fe](https://github.com/aldra-consulting/platform-web/commit/090f3fe5c785d24c8999a7b0194398c5c110ccd7))
* add useClients and useClient hooks ([f47b355](https://github.com/aldra-consulting/platform-web/commit/f47b355634030c5a6d96f845a80cbb1218f77875))
* change assignment role to name ([1930da6](https://github.com/aldra-consulting/platform-web/commit/1930da608eb89ce59d61da3210abef12df57176f))
* change font size in alert component ([a775efc](https://github.com/aldra-consulting/platform-web/commit/a775efcaa9a31da0dbdf9b6f18d528aa1fcebcef))
* change props of animated component ([c773f03](https://github.com/aldra-consulting/platform-web/commit/c773f03f587c83528dc09a1472e5526ae5bde2a2))
* extend Assignment model with a awardCriteria attribute ([a83d616](https://github.com/aldra-consulting/platform-web/commit/a83d61652a933b2505e7c35c6246f1985fcc9598))
* extend Assignment model with a brief attribute ([5dc2de8](https://github.com/aldra-consulting/platform-web/commit/5dc2de8be330eee7fbccaf6c98fc3682fe183059))
* extend Assignment model with a description attribute ([06d65c0](https://github.com/aldra-consulting/platform-web/commit/06d65c0f483bfd646d1c29418bc5ae1bb1dd9ba0))
* extend Assignment model with a details attribute ([1c1fe77](https://github.com/aldra-consulting/platform-web/commit/1c1fe7701483d8f48de1776ff9b97f94aba852d2))
* extend Assignment model with a languages attribute ([54861e2](https://github.com/aldra-consulting/platform-web/commit/54861e28f78ec7217c5423a88ce6ce8357494508))
* extend Assignment model with a representative attribute ([65e6605](https://github.com/aldra-consulting/platform-web/commit/65e6605fc0b7750727e49273beb127dacb4d836e))
* extend Assignment model with a roles attribute ([858e51a](https://github.com/aldra-consulting/platform-web/commit/858e51a08885ef5e622d8c6144b77b4d0c774a46))
* extend Client model with a description attribute ([2f55639](https://github.com/aldra-consulting/platform-web/commit/2f556394246d70b84953aade5588c34931e0abf0))
* extend Role model with a description attribute ([21064b0](https://github.com/aldra-consulting/platform-web/commit/21064b0ef9a19a46574535b649ab8050719e4a8a))
* extend Role model with a qualificationRequirements attribute ([a8610ca](https://github.com/aldra-consulting/platform-web/commit/a8610caa8f53e12da97c8089f41af43fa49e5654))
* extend Role model with a skills attribute ([98637f5](https://github.com/aldra-consulting/platform-web/commit/98637f5e38bd34116f755ce81c4d956202f3ef4f))
* implemenent alert component ([31078f4](https://github.com/aldra-consulting/platform-web/commit/31078f4565e2c818447dc7a90a34c3263fd552ec))
* implemenent chip component ([cd22aa4](https://github.com/aldra-consulting/platform-web/commit/cd22aa49e4c0d21b1bfb53d5b3d39af2b117cb33))
* implemenent loader component ([b550a86](https://github.com/aldra-consulting/platform-web/commit/b550a86c4997f09f4317bc73965165d27b264bc8))
* implement animated component ([29f813f](https://github.com/aldra-consulting/platform-web/commit/29f813f72014861ad205d80601897b02feb94784))
* implement assignment component ([0e49e53](https://github.com/aldra-consulting/platform-web/commit/0e49e53309790b696726eccf720df05da78f9492))
* implement assignment context ([5244152](https://github.com/aldra-consulting/platform-web/commit/5244152d6b60d2beb48f88f5923c362005fe63f1))
* implement assignment page ([d1a5097](https://github.com/aldra-consulting/platform-web/commit/d1a50972b327a2baaabdc138c92fc0cbb3a2e692))
* implement assignment provider ([786db69](https://github.com/aldra-consulting/platform-web/commit/786db69972095416735d0ace07e8c004cee09325))
* implement assignment service ([a8a6e9a](https://github.com/aldra-consulting/platform-web/commit/a8a6e9a5380e102f68dbaf19d2a620e61f9cc81c))
* implement assignments page ([155dc29](https://github.com/aldra-consulting/platform-web/commit/155dc292c1f5871b32bddb4126610c6c5009ee66))
* implement breadcrumbs component ([184e2a3](https://github.com/aldra-consulting/platform-web/commit/184e2a3c36f9dc509a6114da8984e3cbbd52d4ee))
* implement button component ([60119ac](https://github.com/aldra-consulting/platform-web/commit/60119ac8aefca6ed3b6ea34e65ddcb2223c032b4))
* implement card component ([28014e3](https://github.com/aldra-consulting/platform-web/commit/28014e38fc486cac9584f840a7979cea39c02213))
* implement findByIdOrThrow method on the assignment service ([ae84653](https://github.com/aldra-consulting/platform-web/commit/ae8465317dfbbac3d1175b7b01b3540acd93f194))
* implement link component ([da85e39](https://github.com/aldra-consulting/platform-web/commit/da85e396d79e95d818058d2d2eb93fc5b08e2905))
* implement masonry-grid component ([4156250](https://github.com/aldra-consulting/platform-web/commit/415625076171bbe55aa26374765a3d1716959b79))
* implement page component ([0c3c809](https://github.com/aldra-consulting/platform-web/commit/0c3c809f0baee4aa51f2f2b60b83f969081165ee))
* implement redirect component ([a7d0108](https://github.com/aldra-consulting/platform-web/commit/a7d0108ffb1377e2c4458f201fd7a25e4ee6e5fb))
* implement useAssignment hook ([3661f88](https://github.com/aldra-consulting/platform-web/commit/3661f887967f128bc2cc8decee8c1c5d818708af))
* implement useAssignments hook ([87a4f58](https://github.com/aldra-consulting/platform-web/commit/87a4f582fd12e99fff45137ec7e0ff8f94001e9b))
* implement useIsFirstRender hook ([bf49f22](https://github.com/aldra-consulting/platform-web/commit/bf49f224c5cefc81f9ed32d3cf7660ca9dd7c91a))
* implement useReloadable hook ([2caa6bb](https://github.com/aldra-consulting/platform-web/commit/2caa6bb7527a9f8d6c6338139eb6ca9edbbde0b0))
* implement useReloadableResource hook ([861ddbb](https://github.com/aldra-consulting/platform-web/commit/861ddbb25a59310b59f6e08447afe6f20ec9c4f3))
* introduce User entity and rewrite affected code ([a803b8e](https://github.com/aldra-consulting/platform-web/commit/a803b8eaa9451f3fb92d7cd943d183b690b236b5))
* refactor useAssignment hook ([f23e2ed](https://github.com/aldra-consulting/platform-web/commit/f23e2edf291011783a2a5f818468223ee30ade48))
* reimplement useAssignments hook ([50daa41](https://github.com/aldra-consulting/platform-web/commit/50daa418c0a6d58b881108e9e7ee0dc12d869ebb))
* use assignment component ([faa9c16](https://github.com/aldra-consulting/platform-web/commit/faa9c163ecc975a4dfd010123f3f672c5b8853cc))
* use assignment provider ([214d870](https://github.com/aldra-consulting/platform-web/commit/214d87044bbe0263a49389b00e47aa37bf4398bc))
* use assignment service on assignment page ([c0afd80](https://github.com/aldra-consulting/platform-web/commit/c0afd80a93cffa46386496fc662aa6f52140a9f1))
* use layout to fetch assignment ([a40d509](https://github.com/aldra-consulting/platform-web/commit/a40d50923f01dec0aa1ea49c64d942d19863af20))
* use new role context ([d65706b](https://github.com/aldra-consulting/platform-web/commit/d65706b873dbb6e3b1e0868d9f7672cb5bf72d28))

# [1.1.0](https://github.com/aldra-consulting/platform-web/compare/1.0.0...1.1.0) (2024-01-26)


### Features

* add signOut function to useAuthenticatedUser hook ([f793ed0](https://github.com/aldra-consulting/platform-web/commit/f793ed06017400c02071110b7f0caf3bfa4177e9))
* implement avatar component ([8757670](https://github.com/aldra-consulting/platform-web/commit/8757670b5ff747b5fd18ee1454aacb28c2251feb))
* implement header component ([90f17c3](https://github.com/aldra-consulting/platform-web/commit/90f17c347bc8ced2f0a17b0c5bff305aa6d0300b))
* require authentication to use the application ([3613f92](https://github.com/aldra-consulting/platform-web/commit/3613f92499ffb35af7cba3e32b9d022266534224))
* show header with avatar and logo on main page ([22a8223](https://github.com/aldra-consulting/platform-web/commit/22a8223a9b738d4ba7bd251409efef8ad6dffdd5))

# 1.0.0 (2024-01-26)


### Features

* initialise project ([5234f92](https://github.com/aldra-consulting/platform-web/commit/5234f921eef48ac715f39324f269cd94f82e8cee))
