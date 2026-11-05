export const categories = [
 {id:'paper', en:'Paper & Cardboard',ar:'الورق والكرتون',short:['Paper','ورق'],color:'blue'},
 {id:'plastic', en:'Plastic',ar:'البلاستيك',short:['Plastic','بلاستيك'],color:'yellow'},
 {id:'glass', en:'Glass',ar:'الزجاج',short:['Glass','زجاج'],color:'green'},
 {id:'metal', en:'Metal',ar:'المعادن',short:['Metal','معادن'],color:'pink'}
];
const rows = [
 ['Newspaper','جريدة','📰','paper','Newspapers are made from paper fibers.','تُصنع الجرائد من ألياف الورق.'],
 ['Cardboard box','صندوق كرتون','📦','paper','Corrugated cardboard is a paper-based material.','الكرتون المموج مادة مصنوعة من الورق.'],
 ['Office paper','ورق مكتبي','📄','paper','Ordinary uncoated office sheets are paper.','الأوراق المكتبية العادية غير المطلية مصنوعة من الورق.'],
 ['Magazine','مجلة','📚','paper','The pages of this ordinary magazine are paper; remove any plastic wrap.','صفحات هذه المجلة العادية ورقية؛ أزل الغلاف البلاستيكي الخارجي.'],
 ['Paper envelope','ظرف ورقي','✉️','paper','This windowless envelope is made entirely of paper.','هذا الظرف بلا نافذة ومصنوع بالكامل من الورق.'],
 ['Plain paper bag','كيس ورقي عادي','🛍️','paper','This clean, unlined bag is made from paper fibers.','هذا الكيس النظيف غير المبطن مصنوع من ألياف الورق.'],
 ['Plastic water bottle','زجاجة مياه بلاستيكية','🧴','plastic','This empty water bottle has a plastic body.','جسم زجاجة المياه الفارغة هذه مصنوع من البلاستيك.'],
 ['Plastic detergent bottle','عبوة منظف بلاستيكية','🧴','plastic','This empty household laundry detergent bottle is rigid plastic.','عبوة منظف الغسيل المنزلية الفارغة هذه مصنوعة من البلاستيك الصلب.'],
 ['Plastic food container','علبة طعام بلاستيكية','🥡','plastic','This clean, single-material food tub is plastic.','علبة الطعام النظيفة أحادية المادة هذه مصنوعة من البلاستيك.'],
 ['Plastic shampoo bottle','عبوة شامبو بلاستيكية','🧴','plastic','The body of this empty shampoo bottle is plastic.','جسم عبوة الشامبو الفارغة هذه مصنوع من البلاستيك.'],
 ['Plastic milk bottle','زجاجة حليب بلاستيكية','🥛','plastic','This is a rigid plastic bottle, not a layered drinks carton.','هذه زجاجة بلاستيكية صلبة وليست عبوة مشروبات متعددة الطبقات.'],
 ['Glass jar','برطمان زجاجي','🫙','glass','The body of this empty jar is glass; its lid is a separate material.','جسم هذا البرطمان الفارغ زجاجي؛ وغطاؤه مادة منفصلة.'],
 ['Glass bottle','زجاجة زجاجية','🍾','glass','This empty beverage bottle is made of container glass.','زجاجة المشروب الفارغة هذه مصنوعة من زجاج العبوات.'],
 ['Glass jam jar','برطمان مربى زجاجي','🫙','glass','This clean jam jar has a glass body.','جسم برطمان المربى النظيف هذا مصنوع من الزجاج.'],
 ['Glass olive oil bottle','زجاجة زيت زيتون زجاجية','🍾','glass','This empty oil bottle is glass; empty residue before disposal.','زجاجة الزيت الفارغة هذه زجاجية؛ أفرغ البقايا قبل التخلص منها.'],
 ['Glass sauce bottle','زجاجة صلصة زجاجية','🍶','glass','This clean sauce bottle is packaging glass, unlike ceramic dishes.','زجاجة الصلصة النظيفة هذه من زجاج العبوات، بخلاف الأطباق الخزفية.'],
 ['Aluminum soda can','علبة مشروب ألومنيوم','🥫','metal','Aluminum is a lightweight metal used for drink cans.','الألومنيوم معدن خفيف يُستخدم في علب المشروبات.'],
 ['Metal food can','علبة طعام معدنية','🥫','metal','This empty steel food can belongs to the metal family.','علبة الطعام الفولاذية الفارغة هذه تنتمي إلى المعادن.'],
 ['Clean aluminum foil','ورق ألومنيوم نظيف','🔘','metal','Despite its thin, flexible shape, aluminum foil is metal. Acceptance varies locally.','رغم شكله الرقيق والمرن، ورق الألومنيوم معدن. يختلف قبوله محليًا.'],
 ['Steel biscuit tin','علبة بسكويت فولاذية','🍪','metal','This empty reusable biscuit tin is steel, a metal.','علبة البسكويت الفارغة القابلة لإعادة الاستخدام هذه مصنوعة من الفولاذ، وهو معدن.'],
 ['Aluminum food tray','صينية طعام ألومنيوم','🍽️','metal','This clean tray is aluminum, not plastic. Check whether trays are accepted locally.','هذه الصينية النظيفة من الألومنيوم وليست بلاستيكية. تحقق من قبول الصواني محليًا.'],
 ['Cardboard tube','أنبوب كرتوني','🧻','paper','The empty inner tube is cardboard, a paper-based material.','الأنبوب الداخلي الفارغ مصنوع من الكرتون، وهو مادة ورقية.']
];
const tips={
paper:['Keep paper dry and clean; flatten boxes to save space.','حافظ على الورق نظيفًا وجافًا واطوِ الصناديق لتوفير المساحة.'],
plastic:['Plastic types differ. Check which shapes and types your local service accepts.','تختلف أنواع البلاستيك. تحقق من الأشكال والأنواع التي تقبلها خدمة التدوير المحلية.'],
glass:['Check local rules for lids and glass collection. Never mix in ceramics or drinking glasses.','تحقق من القواعد المحلية للأغطية وجمع الزجاج. لا تخلط معه الخزف أو أكواب الشرب.'],
metal:['Empty and clean packaging. Check local acceptance of foil and trays.','أفرغ العبوات ونظفها. تحقق من قبول ورق الألومنيوم والصواني محليًا.']
};
export const questions=rows.map((r,id)=>({id,name:{en:r[0],ar:r[1]},emoji:r[2],category:r[3],explanation:{en:r[4],ar:r[5]},tip:{en:tips[r[3]][0],ar:tips[r[3]][1]}}));
export function newSession(random=Math.random){const pool=[...questions];for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}return pool.slice(0,10);}
export function rank(score){return score>=90?0:score>=70?1:score>=50?2:3;}
export const learning=[
 ['A little sorting. A bigger difference.','فرز بسيط، فرق كبير.','Separating materials helps recycling facilities recover useful resources and reduces contamination.','يساعد فصل المواد منشآت التدوير على استعادة الموارد المفيدة وتقليل التلوث.','🌱'],
 ['Give materials another life','امنح المواد حياة جديدة','Recycling can reduce the need to extract new raw materials. Reusing and reducing waste come first.','قد يقلل التدوير الحاجة لاستخراج مواد خام جديدة. وتأتي الأولوية لتقليل النفايات وإعادة الاستخدام.','♻️'],
 ['Small habits, climate action','عادات بسيطة من أجل المناخ','Making products from recovered materials can use less energy. Better waste management can also reduce emissions; the benefit depends on the material and process.','قد يستهلك التصنيع من المواد المسترجعة طاقة أقل. وقد تقلل الإدارة الأفضل للنفايات الانبعاثات؛ وتعتمد الفائدة على المادة والعملية.','🌍'],
 ['Skip the common mix-ups','تجنب الأخطاء الشائعة','Food residue, plastic bags and mixed-material packaging can disrupt recycling. Do not assume a recycling symbol guarantees local acceptance.','قد تعيق بقايا الطعام والأكياس البلاستيكية والعبوات متعددة المواد التدوير. لا تفترض أن رمز التدوير يضمن القبول محليًا.','💡'],
 ['Your local guide comes first','دليلك المحلي أولًا','Check your municipality or collector’s rules. Keep batteries, electronics and hazardous waste out of ordinary recycling and use dedicated collection points.','راجع قواعد البلدية أو جهة الجمع. أبعد البطاريات والإلكترونيات والنفايات الخطرة عن التدوير العادي واستخدم نقاط الجمع المخصصة.','📍']
];
