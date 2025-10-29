(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dropbox/Work/Github/beside-animation3/components/rolling-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RollingText",
    ()=>RollingText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RollingText(param) {
    let { text, isVisible, className, delay = 0, style } = param;
    _s();
    if (!isVisible) return null;
    // Generate a unique ID for this text instance to avoid conflicts
    const textId = __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "RollingText.useMemo[textId]": ()=>Math.random().toString(36).substr(2, 9)
    }["RollingText.useMemo[textId]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        style: style,
        children: text.split("").map((char, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    filter: "blur(0.25rem)",
                    opacity: 0,
                    y: "1.125rem",
                    rotateX: 270
                },
                animate: {
                    filter: "blur(0)",
                    opacity: 1,
                    y: 0,
                    rotateX: 0
                },
                transition: {
                    duration: 0.15,
                    ease: "easeOut",
                    delay: delay + index * 0.05
                },
                children: char
            }, "".concat(textId, "-").concat(index), false, {
                fileName: "[project]/Dropbox/Work/Github/beside-animation3/components/rolling-text.tsx",
                lineNumber: 33,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Dropbox/Work/Github/beside-animation3/components/rolling-text.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(RollingText, "X4RjWIQrFT3gokE00ts8tmHaUmE=");
_c = RollingText;
var _c;
__turbopack_context__.k.register(_c, "RollingText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Work/Github/beside-animation3/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(args));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/components/rolling-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Work/Github/beside-animation3/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroCard() {
    _s();
    const [currentCardIndex, setCurrentCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const animatedTextPrepItem1 = "Role: Backend & AI Lead at Beside.";
    const animatedTextPrepItem2 = "Location: New York, NY";
    const animatedTextPrepItem3 = "LinkedIn: Matthias Thomas-Lamotte LinkedIn";
    const animatedTextNewLead = "Hi Sarah! You're confirmed for Tomorrow, Oct 15 at 10am tomorrow. See you then!";
    const animatedTextSummary = "The meeting discusses the product strategy for the macOS app, focusing on contact unification with iOS and aiming for a cohesive user experience.";
    const cards = [
        {
            id: "incoming-call",
            title: "Incoming call",
            subtitle: "(424) 456-2424",
            avatar: "/assets/img/avatar.png",
            roundedAvatar: false,
            icon: "/assets/icons/call.incoming.svg",
            hasContent: false
        },
        {
            id: "answering-phone",
            title: "Beside is answering the phone",
            subtitle: "Hey! This is Bobby's AI Receptionist, how can I help you today?",
            avatar: "/assets/img/ai.svg",
            roundedAvatar: false,
            icon: "/assets/icons/waveform.svg",
            hasContent: false
        },
        {
            id: "new-lead",
            title: "New Lead: Sarah Nguyen",
            subtitle: "Kitchen remodel, tomorrow estimate",
            avatar: "/assets/img/ai.svg",
            roundedAvatar: false,
            icon: "/assets/icons/waveform.svg",
            hasContent: true,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 justify-between bg-background-view/5 shadow-card-large rounded-[1.5625rem] p-5 relative overflow-clip min-h-20 animate-[fade-in-up_0.3s_cubic-bezier(0.25,0.1,0.25,1)_forwards]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                    text: animatedTextNewLead,
                    isVisible: true,
                    delay: 0.5,
                    className: "text-text-primary text-body-medium font-medium"
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        },
        {
            id: "follow-up-text",
            title: "Follow-up text message to Sarah",
            subtitle: "Delivered by Beside",
            avatar: "/assets/img/ai.svg",
            roundedAvatar: false,
            icon: "/assets/icons/chat.svg",
            hasContent: false
        },
        {
            id: "team-joined",
            title: "Your team joined your inbox",
            subtitle: "Bobby, Maxime, Helene, +3",
            avatar: "/assets/img/logo.svg",
            roundedAvatar: true,
            icon: "/assets/icons/call.incoming.svg",
            hasContent: false
        },
        {
            id: "meeting-prep",
            title: "1:1 Maxime x Matthias",
            subtitle: "Joining in 5 mins",
            avatar: "/assets/img/google-meet.svg",
            roundedAvatar: true,
            icon: "/assets/icons/cursor.click.svg",
            hasContent: true,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 justify-between bg-background-view/5 shadow-card-large rounded-[1.5625rem] p-5 relative overflow-clip animate-[fade-in-down_0.2s_cubic-bezier(0.25,0.1,0.25,1)_forwards]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-1 text-palette-purple animate-[fade-in-down_0.2s_cubic-bezier(0.25,0.1,0.25,1)_forwards]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-6 rounded-xs p-1 text-palette-purple",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M11.9019 12.8086C12.1718 12.7897 12.5292 13.0502 13.2437 13.5718L18.9185 17.7144C19.7606 18.3292 20.182 18.6367 20.2368 18.9155C20.2842 19.1569 20.2052 19.4063 20.0273 19.5776C19.8217 19.7753 19.2985 19.7884 18.2534 19.8164L16.3198 19.8691C16.0381 19.8766 15.7789 20.0234 15.6313 20.2603L14.5825 21.9463C14.0627 22.7814 13.8022 23.1991 13.5322 23.2778C13.2984 23.346 13.045 23.2939 12.8569 23.1401C12.6403 22.9622 12.5674 22.4763 12.4204 21.5068L11.3848 14.6836C11.2528 13.8132 11.1877 13.3779 11.3306 13.1499C11.4548 12.9522 11.6675 12.8253 11.9019 12.8086Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6.69141 17.2646C7.13075 16.8253 7.84289 16.8253 8.28223 17.2646C8.72139 17.704 8.72151 18.4162 8.28223 18.8555L5.63086 21.5068C5.19158 21.9461 4.47939 21.946 4.04004 21.5068C3.6007 21.0675 3.6007 20.3554 4.04004 19.916L6.69141 17.2646Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5.625 12.4248C6.24632 12.4248 6.75 12.9285 6.75 13.5498C6.7499 14.171 6.24626 14.6748 5.625 14.6748H1.875C1.25374 14.6748 0.750095 14.171 0.75 13.5498C0.75 12.9285 1.25368 12.4248 1.875 12.4248H5.625Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22.125 12.4248C22.7463 12.4248 23.25 12.9285 23.25 13.5498C23.2499 14.171 22.7463 14.6748 22.125 14.6748H18.375C17.7537 14.6748 17.2501 14.171 17.25 13.5498C17.25 12.9285 17.7537 12.4248 18.375 12.4248H22.125Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4.05029 5.59717C4.48963 5.15783 5.20177 5.15783 5.64111 5.59717L8.29248 8.24853C8.73182 8.68787 8.73182 9.40001 8.29248 9.83935C7.85313 10.2785 7.14094 10.2786 6.70166 9.83935L4.05029 7.18799C3.61101 6.74871 3.61113 6.03652 4.05029 5.59717Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.3589 5.59717C18.7982 5.15783 19.5104 5.15783 19.9497 5.59717C20.3889 6.03652 20.389 6.74871 19.9497 7.18799L17.2983 9.83935C16.8591 10.2786 16.1469 10.2785 15.7075 9.83935C15.2682 9.40001 15.2682 8.68787 15.7075 8.24853L18.3589 5.59717Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M11.9927 2.30713C12.6139 2.30722 13.1177 2.81087 13.1177 3.43213V7.18213C13.1177 7.80339 12.6139 8.30703 11.9927 8.30713C11.3714 8.30713 10.8677 7.80345 10.8677 7.18213V3.43213C10.8677 2.81081 11.3714 2.30713 11.9927 2.30713Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 flex text-palette-purple text-body-small font-bold",
                                children: "5-Minute Prep"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-6 rounded-xs p-1 text-palette-purple",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8.40319 11.495C8.81631 11.5237 9.12776 11.8816 9.09925 12.2946C9.07057 12.7078 8.71278 13.0193 8.29961 12.9907L4.32559 12.7152C4.28065 12.7121 4.20316 12.7071 4.13293 12.6965C4.07204 12.6874 3.98726 12.6699 3.89331 12.6309L3.79664 12.5854L3.68201 12.5094C3.60911 12.4542 3.54386 12.389 3.48866 12.3161L3.4127 12.2014C3.3394 12.0701 3.31371 11.9462 3.30152 11.8651C3.29097 11.7948 3.28599 11.7173 3.28288 11.6725L3.00736 7.69845C2.97888 7.28547 3.29045 6.92763 3.70342 6.89881C4.11651 6.87021 4.47426 7.18181 4.50305 7.59487L4.75648 11.2416L8.40319 11.495Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12.507 3.68438L12.583 3.79901L12.6286 3.89568C12.6675 3.98971 12.685 4.0744 12.6942 4.1353C12.7047 4.20561 12.7097 4.28304 12.7128 4.32796L12.9883 8.30198C13.0169 8.71515 12.7055 9.07294 12.2923 9.10162C11.8792 9.13009 11.5213 8.81866 11.4926 8.40556L11.2392 4.75885L7.5925 4.50542C7.17946 4.47661 6.86784 4.11886 6.89644 3.70578C6.92517 3.29275 7.28306 2.98127 7.69608 3.00973L11.6701 3.28525C11.7149 3.28836 11.7924 3.29334 11.8628 3.30389C11.9438 3.31608 12.0677 3.34176 12.1991 3.41507L12.3137 3.49103C12.3866 3.54625 12.4518 3.61145 12.507 3.68438Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 animate-[fade-in-down_0.2s_cubic-bezier(0.25,0.1,0.25,1)_forwards]",
                        style: {
                            maskImage: "linear-gradient(to top, transparent 0%, hsla(var(--background-view) / 1) 50%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-text-primary text-body-large font-bold",
                                children: "Matthias Thomas-Lamotte"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-none list-inside flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-start gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                            text: animatedTextPrepItem1,
                                            isVisible: true,
                                            delay: 0.1,
                                            className: "text-text-secondary text-body-small font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-start gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                            text: animatedTextPrepItem2,
                                            isVisible: true,
                                            delay: 0.3,
                                            className: "text-text-secondary text-body-small font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-start gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                            text: animatedTextPrepItem3,
                                            isVisible: true,
                                            delay: 0.5,
                                            className: "text-text-secondary text-body-small font-medium"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-50 bottom-0 right-0 w-full h-2/3 backdrop-blur-lg rounded-b-[1.5625rem]",
                        style: {
                            maskImage: "linear-gradient(to bottom, transparent 50%, hsla(var(--background-view) / 0.6) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        },
        {
            id: "writing-notes",
            title: "You're in 1:1 Maxime x Matthias",
            subtitle: "Writing notes for you",
            avatar: "/assets/img/google-meet.svg",
            roundedAvatar: true,
            icon: "/assets/icons/pencil.sparkle.svg",
            hasContent: false
        },
        {
            id: "meeting-notes-ready",
            title: "You're in 1:1 Maxime x Matthias",
            subtitle: "Your meeting notes are ready",
            avatar: "/assets/img/google-meet.svg",
            roundedAvatar: true,
            icon: "/assets/icons/pencil.sparkle.svg",
            hasContent: true,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 justify-between bg-background-view/5 shadow-card-large rounded-[1.5625rem] p-5 relative overflow-clip min-h-36 animate-[fade-in-down_0.3s_cubic-bezier(0.25,0.1,0.25,1)_forwards]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                text: "MacOS App Development Workshop",
                                isVisible: true,
                                delay: 0.3,
                                className: "text-text-primary text-body-large font-bold"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-start gap-6",
                                style: {
                                    maskImage: "linear-gradient(to top, transparent 0%, hsla(var(--background-view) / 1) 50%)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "size-6 animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0.3s_forwards] opacity-0",
                                                src: "/assets/img/avatar2.png"
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                                text: "Maxime",
                                                isVisible: true,
                                                className: "text-text-primary text-body-small font-medium",
                                                delay: 0.3
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "size-6 animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0.5s_forwards] opacity-0",
                                                src: "/assets/img/avatar4.png"
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                                text: "Matthias",
                                                isVisible: true,
                                                className: "text-text-primary text-body-small font-medium",
                                                delay: 0.5
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-body-small leading-tight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                    text: animatedTextSummary,
                                    isVisible: true,
                                    delay: 0.7,
                                    className: "text-text-secondary text-body-small font-medium"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-50 bottom-0 right-0 w-full h-2/3 backdrop-blur-lg rounded-b-[1.5625rem]",
                        style: {
                            maskImage: "linear-gradient(to bottom, transparent 50%, hsla(var(--background-view) / 0.6) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this)
        },
        {
            id: "ask-beside",
            title: "Ask Beside anything",
            subtitle: "Search through calls, texts, meetings",
            avatar: "/assets/img/ask.svg",
            roundedAvatar: false,
            icon: "/assets/icons/pencil.sparkle.svg",
            hasContent: true,
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 justify-between bg-background-elevated/[0.08] rounded-full pl-6 pr-3 py-3 relative overflow-clip animate-[fade-in-down_0.3s_cubic-bezier(0.25,0.1,0.25,1)_forwards]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "data-slot": "ask-beside-caret",
                            className: "h-2/3 rounded-full bg-palette-teal w-1 block absolute top-1/2 -translate-y-1/2 left-0 opacity-0",
                            style: {
                                animation: "fade-in-scale 0.2s ease-out 0.8s forwards, pulse 2s cubic-bezier(0.4,0,0.6,1) 1s infinite"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                            text: "How can I help?",
                            isVisible: true,
                            className: "text-text-primary/40 text-body-large font-medium w-full"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/icons/circle.arrow.up.svg",
                            className: "size-8 animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0.3s_forwards] opacity-0"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this)
        }
    ];
    const currentCard = cards[currentCardIndex];
    const nextCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCard.useCallback[nextCard]": ()=>{
            setIsTransitioning(true);
            setTimeout({
                "HeroCard.useCallback[nextCard]": ()=>{
                    setCurrentCardIndex({
                        "HeroCard.useCallback[nextCard]": (prev)=>prev < cards.length - 1 ? prev + 1 : 0
                    }["HeroCard.useCallback[nextCard]"]);
                    setIsTransitioning(false);
                }
            }["HeroCard.useCallback[nextCard]"], 500);
        }
    }["HeroCard.useCallback[nextCard]"], [
        cards.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCard.useEffect": ()=>{
            if (!isPlaying) return;
            const timer = setTimeout({
                "HeroCard.useEffect.timer": ()=>{
                    nextCard();
                }
            }["HeroCard.useEffect.timer"], 5000);
            return ({
                "HeroCard.useEffect": ()=>clearTimeout(timer)
            })["HeroCard.useEffect"];
        }
    }["HeroCard.useEffect"], [
        currentCardIndex,
        nextCard,
        isPlaying
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-[28rem] bg-background-elevated/10 backdrop-blur-xl text-text-primary flex flex-col items-center justify-center p-5 shadow-base rounded-[2.75rem] relative overflow-clip", "animate-[card-enter_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_forwards]", isTransitioning && "animate-[card-transition-out_0.1s_ease-spring_forwards]"),
            children: [
                !isTransitioning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none -left-full",
                    style: {
                        animation: "shimmer 0.5s ease-out 0.1s forwards"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full w-1/2",
                        style: {
                            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.2) 70%, transparent 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 361,
                        columnNumber: 13
                    }, this)
                }, "shimmer-".concat(currentCard.id), false, {
                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                    lineNumber: 354,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "@container/card-header flex gap-4 justify-between items-center relative w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-4 justify-between items-center", currentCardIndex === 0 && "animate-[shake_0.5s_ease-out_forwards]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-center size-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", "size-12 shadow-[0_6px_112px_0_rgba(0,0,0,0.06),0_2px_28px_0_rgba(0,0,0,0.02),0_2px_8px_0_rgba(0,0,0,0.04)] p-0", "animate-[fade-in-blur-sm_0.2s_cubic-bezier(0.175,0.885,0.32,1.1)_0.1s_forwards] opacity-0", currentCard.roundedAvatar && "rounded-2xl p-2 bg-background-elevated"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            alt: currentCard.title,
                                            src: currentCard.avatar,
                                            className: "size-full aspect-square animate-[fade-in-blur-xs_0.2s_cubic-bezier(0.175,0.885,0.32,1.1)_forwards] opacity-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this)
                                    }, "avatar-".concat(currentCard.avatar), false, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    (currentCard.id === "incoming-call" || currentCard.id === "meeting-prep" || currentCard.id === "writing-notes" || currentCard.id === "meeting-notes-ready") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "size-5.5 absolute bottom-0 right-0 bg-background-elevated rounded-lg p-1 shadow-[0_0_12px_0_rgba(0,0,0,0.08)] animate-[fade-in-blur-xs_0.5s_cubic-bezier(0.175,0.885,0.32,1.1)_0.1s_forwards] opacity-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/img/logo.svg",
                                            className: "size-full aspect-square"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 19
                                        }, this)
                                    }, "logo-beside-".concat(currentCard.avatar), false, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5 flex-1 h-fit w-86 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-text-primary/90 text-body-medium font-semibold animate-[fade-in-left_0.2s_cubic-bezier(0.175,0.885,0.32,1.1)_0.05s_forwards] opacity-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                            text: currentCard.title,
                                            isVisible: true,
                                            delay: 0
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-text-primary/50 text-body-medium max-w-76 whitespace-nowrap overflow-hidden max-h-12 animate-[fade-in-left_0.2s_cubic-bezier(0.175,0.885,0.32,1.1)_0.1s_forwards] opacity-0",
                                        style: {
                                            maskImage: "linear-gradient(to left, transparent 1%, #000000 10%)"
                                        },
                                        children: [
                                            currentCard.id === "new-lead" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/img/hubspot.png",
                                                className: "size-4 flex-shrink-0 inline-block mr-1",
                                                alt: "HubSpot"
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$components$2f$rolling$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RollingText"], {
                                                text: currentCard.subtitle,
                                                isVisible: true,
                                                delay: 0.5
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-1/2 -translate-y-1/2 flex h-fit items-center justify-between mr-2 shrink-0",
                                children: currentCard.id === "team-joined" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "*:data-[slot=avatar]:ring-border flex -space-x-2 items-center *:data-[slot=avatar]:ring-3 animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_forwards] opacity-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-slot": "avatar",
                                            src: "/assets/img/avatar.png",
                                            className: "z-[3] relative flex size-8 shrink-0 overflow-hidden rounded-full aspect-square animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0s_forwards] opacity-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-slot": "avatar",
                                            src: "/assets/img/avatar2.png",
                                            className: "z-[2] relative flex size-8 shrink-0 overflow-hidden rounded-full aspect-square animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0.05s_forwards] opacity-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-slot": "avatar",
                                            src: "/assets/img/avatar3.png",
                                            className: "z-[1] relative flex size-8 shrink-0 overflow-hidden rounded-full aspect-square animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0.1s_forwards] opacity-0"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-slot": "avatar",
                                            className: "z-[0] relative flex size-8 shrink-0 overflow-hidden items-center justify-center rounded-full bg-background-grouped/50 p-1 text-body-tiny font-medium tabular-nums animate-[fade-in-blur_0.3s_cubic-bezier(0.175,0.885,0.32,1.1)_0.15s_forwards] opacity-0",
                                            children: "+3"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentCard.icon,
                                    className: "relative flex size-8 shrink-0 overflow-hidden rounded-xs p-1 aspect-square animate-[fade-in-icon_0.5s_cubic-bezier(0.175,0.885,0.32,1.1)_forwards] opacity-0"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "header-".concat(currentCard.id), true, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                currentCard.hasContent && currentCard.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Work$2f$Github$2f$beside$2d$animation3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: currentCard.content
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                        lineNumber: 483,
                        columnNumber: 13
                    }, this)
                }, "content-".concat(currentCard.id), false, {
                    fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
                    lineNumber: 482,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
            lineNumber: 345,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Dropbox/Work/Github/beside-animation3/app/page.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
_s(HeroCard, "BEfrka7oVqemHmqUbZh/dgn9wO4=");
_c = HeroCard;
var _c;
__turbopack_context__.k.register(_c, "HeroCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Dropbox_Work_Github_beside-animation3_d9574824._.js.map