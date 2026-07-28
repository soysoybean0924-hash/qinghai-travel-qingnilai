document.addEventListener('DOMContentLoaded', () => {
    // 示例景点数据
    const attractionsData = [
        {
            id: 1,
            name: '青海湖',
            img: 'images/attraction-1.png',
            images: [
                'images/attraction-1.png'
            ],
            ticket: '旺季100元，淡季50元',
            description: '青海湖是中国最大的内陆湖，湖水清澈，景色壮丽，是骑行和观鸟的绝佳地点。',
            altitude: 3200,
            notes: '海拔较高，建议60岁以上游客提前咨询医生，备好抗高原反应药物。游玩时请缓步慢行，避免剧烈运动。',
            options: [
                { name: '成人票', price: '100元', description: '成人标准票' },
                { name: '儿童票', price: '50元', description: '1.2-1.5米儿童' },
                { name: '观光车', price: '30元', description: '景区内往返观光车' },
                { name: '游船票', price: '120元', description: '青海湖游船' }
            ]
        },
        {
            id: 2,
            name: '茶卡盐湖',
            img: 'images/attraction-2.png',
            images: [
                'images/attraction-2.png'
            ],
            ticket: '60元',
            description: '被誉为“天空之镜”，湖面像镜子一样反射着天空的景色，非常适合拍照。',
            altitude: 3100,
            notes: '海拔约3100米，同样需要注意预防高原反应。盐湖内光照强烈，请务必戴好太阳镜，保护眼睛。地面为盐壳，建议穿着舒适的防水鞋。',
            options: [
                { name: '成人票', price: '60元', description: '成人标准票' },
                { name: '儿童票', price: '30元', description: '1.2-1.5米儿童' },
                { name: '小火车', price: '50元', description: '盐湖小火车' },
                { name: '观光车', price: '20元', description: '景区内往返观光车' }
            ]
        },
        {
            id: 3,
            name: '塔尔寺',
            img: 'images/attraction-3.png',
            images: [
                'images/attraction-3.png'
            ],
            ticket: '70元',
            description: '藏传佛教格鲁派的六大寺院之一，拥有悠久的历史和宏伟的建筑。',
            altitude: 2600,
            notes: '海拔相对较低，更适合老年游客。寺内台阶较多，游览时请注意脚下安全，慢慢行走。请尊重宗教文化，不要大声喧哗。',
            options: [
                { name: '成人票', price: '70元', description: '成人标准票' },
                { name: '儿童票', price: '35元', description: '1.2-1.5米儿童' },
                { name: '讲解服务', price: '50元', description: '专业导游讲解' }
            ]
        },
        {
            id: 4,
            name: '孟达天池',
            img: 'images/attraction-4.png',
            images: [
                'images/attraction-4.png'
            ],
            ticket: '70元',
            description: '位于循化撒拉族自治县，是一个高山湖泊，周围森林茂密，景色优美。',
            altitude: 2500,
            notes: '景区内需要徒步，建议穿着舒适的运动鞋，携带足够的饮用水。',
            options: [
                { name: '成人票', price: '70元', description: '成人标准票' },
                { name: '儿童票', price: '35元', description: '1.2-1.5米儿童' },
                { name: '观光车', price: '20元', description: '景区内往返观光车' }
            ]
        },
        {
            id: 5,
            name: '卓尔山',
            img: 'images/attraction-5.png',
            images: [
                'images/attraction-5.png'
            ],
            ticket: '60元',
            description: '位于祁连县，是祁连山的支脉，山顶视野开阔，可以俯瞰整个祁连县城和周围的山脉。',
            altitude: 2930,
            notes: '山顶风大，建议携带外套。海拔较高，注意预防高原反应。',
            options: [
                { name: '成人票', price: '60元', description: '成人标准票' },
                { name: '儿童票', price: '30元', description: '1.2-1.5米儿童' },
                { name: '观光车', price: '20元', description: '景区内往返观光车' }
            ]
        },
        {
            id: 6,
            name: '门源油菜花',
            img: 'images/attraction-6.png',
            images: [
                'images/attraction-6.png'
            ],
            ticket: '30元',
            description: '门源县是中国最大的油菜花种植基地，每年7月，油菜花盛开，形成金色的海洋。',
            altitude: 2800,
            notes: '最佳观赏时间为7月中旬至8月初。建议携带防晒霜和遮阳帽。',
            options: [
                { name: '成人票', price: '30元', description: '成人标准票' },
                { name: '儿童票', price: '15元', description: '1.2-1.5米儿童' },
                { name: '观光车', price: '20元', description: '景区内往返观光车' }
            ]
        },
        {
            id: 7,
            name: '互助土族故土园',
            img: 'images/attraction-7.png',
            images: [
                'images/attraction-7.png'
            ],
            ticket: '80元',
            description: '展示土族的历史文化、民俗风情和传统建筑，是了解土族文化的重要场所。',
            altitude: 2300,
            notes: '景区内有土族歌舞表演，建议观看。可以品尝土族特色美食。',
            options: [
                { name: '成人票', price: '80元', description: '成人标准票' },
                { name: '儿童票', price: '40元', description: '1.2-1.5米儿童' },
                { name: '讲解服务', price: '40元', description: '专业导游讲解' }
            ]
        },
        {
            id: 8,
            name: '原子城',
            img: 'images/attraction-8.png',
            images: [
                'images/attraction-8.png'
            ],
            ticket: '60元',
            description: '中国第一个核武器研制基地，现在是爱国主义教育基地，展示了中国核武器研制的历史。',
            altitude: 3200,
            notes: '海拔较高，注意预防高原反应。建议预留2-3小时参观时间。',
            options: [
                { name: '成人票', price: '60元', description: '成人标准票' },
                { name: '儿童票', price: '30元', description: '1.2-1.5米儿童' },
                { name: '讲解服务', price: '50元', description: '专业导游讲解' }
            ]
        },
        {
            id: 9,
            name: '贵德国家地质公园',
            img: 'images/attraction-9.png',
            images: [
                'images/attraction-9.png'
            ],
            ticket: '80元',
            description: '以丹霞地貌为主，色彩斑斓的山体形成了独特的自然景观。',
            altitude: 2200,
            notes: '景区内需要徒步，建议穿着舒适的运动鞋。阳光强烈，注意防晒。',
            options: [
                { name: '成人票', price: '80元', description: '成人标准票' },
                { name: '儿童票', price: '40元', description: '1.2-1.5米儿童' },
                { name: '观光车', price: '25元', description: '景区内往返观光车' }
            ]
        },
        {
            id: 10,
            name: '可可西里',
            img: 'images/attraction-10.png',
            images: [
                'images/attraction-10.png'
            ],
            ticket: '免费',
            description: '中国最大的无人区之一，是藏羚羊等珍稀野生动物的栖息地，生态环境原始而脆弱。',
            altitude: 4500,
            notes: '海拔很高，强烈建议提前做好高原反应预防。需要办理边防证。建议跟随专业团队前往。',
            options: [
                { name: '环保费', price: '100元', description: '生态保护费' },
                { name: '向导服务', price: '300元', description: '专业向导' },
                { name: '车辆租赁', price: '500元/天', description: '四驱车辆' }
            ]
        }
    ];

    // 美食示例数据
    const foodData = [
        {
            name: '青海老酸奶',
            texture: '软糯',
            notes: '口感醇厚，入口即化，非常适合所有年龄段的游客，特别是牙口不好的老年人。'
        },
        {
            name: '酿皮',
            texture: '软滑',
            notes: '口感软滑，但调料可能偏辣，可以要求店家少放或不放辣椒，非常开胃。'
        },
        {
            name: '手抓羊肉',
            texture: '软烂',
            notes: '通常会炖煮得非常软烂，入口即脱骨。点餐时可以特别要求选择更嫩的部位，非常适合需要补充能量的游客。'
        },
        {
            name: '焜锅馍馍',
            texture: '外脆内软',
            notes: '一种特色烤饼，外皮较硬，但内部非常松软。牙口不好的游客可以只吃内部，麦香浓郁。'
        },
        {
            name: '尕面片',
            texture: '软滑',
            notes: '类似于面疙瘩汤，面片柔软易嚼，汤味鲜美，是一道非常舒适暖胃的主食。'
        }
    ];

    // 康养中心示例数据
    const wellnessData = [
        {
            id: 1,
            name: '黄金海拔2200青藏高原康养中心',
            location: '西宁',
            images: [
                'images/wellness-1.1.png',
                'images/wellness-1.2.png'
            ],
            environment: '位于西宁市城北区北川河沿岸，毗邻北川河湿地公园，周边配套设施完善。',
            projects: '住宿、中藏医技术体验、药膳服务、基础理疗。',
            cost: '精致大床房200元/晚，精致双床房240元/晚，10天9晚（三餐+中藏医基础理疗）：2024元/人',
            roomTypes: [
                { name: '精致大床房', price: '200元/晚', description: '20-22㎡，1张1.8米大床房' },
                { name: '精致双床房', price: '240元/晚', description: '21-23㎡，2张1.2米单人床' },
                { name: '10天9晚套餐', price: '2024元/人', description: '包含三餐+中藏医基础理疗' }
            ]
        },
        {
            id: 2,
            name: '阳光福地康养中心',
            location: '海东',
            images: [
                'images/wellness-2.1.png',
                'images/wellness-2.2.png',
                'images/wellness-2.3.png',
                'images/wellness-2.4.png',
                'images/wellness-2.5.png'
            ],
            environment: '位于海东市互助县，自然环境优美，空气清新，被森林环绕。',
            projects: '森林浴、温泉理疗、健康膳食、太极拳教学。',
            cost: '800元/天起',
            roomTypes: [
                { name: '豪华套房', price: '1200元/晚', description: '40-45㎡，1张2米大床，独立温泉池' },
                { name: '舒适标间', price: '800元/晚', description: '25-30㎡，2张1.2米单人床' }
            ]
        },
        {
            id: 3,
            name: '西宁市大通县生态疗养院',
            location: '西宁',
            images: [
                'images/wellness-3.1.png',
                'images/wellness-3.2.png'
            ],
            environment: '海拔适中，负氧离子含量高，适合心肺功能调养。',
            projects: '高山徒步、呼吸训练、营养咨询、心理疏导。',
            cost: '950元/天起',
            roomTypes: [
                { name: '高级单间', price: '950元/晚', description: '30㎡，1张1.8米大床' },
                { name: '高级标间', price: '1000元/晚', description: '32㎡，2张1.2米单人床' }
            ]
        }
    ];

    // 酒店数据
    const hotelsData = [
        {
            id: 1,
            name: '全季酒店',
            category: '连锁酒店',
            img: 'images/hotel-1-1.png',
            images: ['images/hotel-1-1.png', 'images/hotel-1-2.png', 'images/hotel-1-3.png'],
            address: '青海省西宁市',
            description: '全季酒店是一家连锁酒店，提供舒适的住宿环境和优质的服务。',
            recommendation: '舒适温馨，商务出行首选',
            rooms: [
                { name: '高级大床房', price: '258元/晚', description: '舒适大床，独立卫浴', img: 'images/hotel-1-2.png' },
                { name: '豪华家庭房', price: '320元/晚', description: '宽敞空间，适合家庭入住', img: 'images/hotel-1-3.png' }
            ]
        },
        {
            id: 2,
            name: '维也纳国际酒店',
            category: '连锁酒店',
            img: 'images/hotel-2-1.png',
            images: ['images/hotel-2-1.png', 'images/hotel-2-2.png', 'images/hotel-2-3.png'],
            address: '青海省西宁市',
            description: '维也纳国际酒店提供温馨舒适的住宿环境，服务周到。',
            recommendation: '性价比高，经济实惠之选',
            rooms: [
                { name: '标准大床房', price: '134元/晚', description: '标准配置，经济实惠', img: 'images/hotel-2-2.png' },
                { name: '豪华双床房', price: '198元/晚', description: '宽敞双床，舒适体验', img: 'images/hotel-2-3.png' }
            ]
        },
        {
            id: 3,
            name: '亚朵酒店',
            category: '连锁酒店',
            img: 'images/hotel-3-1.png',
            images: ['images/hotel-3-1.png', 'images/hotel-3-2.png', 'images/hotel-3-3.png'],
            address: '青海省西宁市',
            description: '亚朵酒店以其独特的设计和优质的服务著称。',
            recommendation: '设计独特，品质卓越',
            rooms: [
                { name: '高级大床房', price: '377元/晚', description: '高端配置，舒适体验', img: 'images/hotel-3-2.png' },
                { name: '尊享双床房', price: '438元/晚', description: '尊享服务，豪华体验', img: 'images/hotel-3-3.png' }
            ]
        },
        {
            id: 4,
            name: '青海宾馆',
            category: '连锁酒店',
            img: 'images/hotel-4-1.png',
            images: ['images/hotel-4-1.png', 'images/hotel-4-2.png', 'images/hotel-4-3.png'],
            address: '青海省西宁市',
            description: '青海宾馆是一家历史悠久的酒店，环境优雅，服务优质。',
            recommendation: '历史悠久，环境优雅',
            rooms: [
                { name: '舒适大床房', price: '353元/晚', description: '舒适配置，温馨体验', img: 'images/hotel-4-2.png' },
                { name: '豪华双床房', price: '431元/晚', description: '豪华配置，尊贵体验', img: 'images/hotel-4-3.png' }
            ]
        },
        {
            id: 5,
            name: '汉庭优佳酒店（共和青海湖南大街店）',
            category: '连锁酒店',
            img: 'images/hotel-5-1.png',
            images: ['images/hotel-5-1.png', 'images/hotel-5-2.png', 'images/hotel-5-3.png'],
            address: '海南州共和县',
            description: '位于海南州共和县，是距离青海湖二郎剑景区较近的连锁酒店，性价比高，部分房型配备空调，适合环湖游住宿。',
            recommendation: '环湖游首选，交通便利',
            rooms: [
                { name: '标准大床房', price: '220元/晚', description: '标准配置，经济实惠', img: 'images/hotel-5-2.png' },
                { name: '标准双床房', price: '260元/晚', description: '双床配置，适合多人入住', img: 'images/hotel-5-3.png' }
            ]
        },
        {
            id: 6,
            name: '青海湖阿若啦湖景美宿',
            category: '民宿',
            img: 'images/hotel-6-1.png',
            images: ['images/hotel-6-1.png', 'images/hotel-6-2.png', 'images/hotel-6-3.png'],
            address: '青海湖江西沟镇',
            description: '想在青海湖畔拥有一方私密的观景天地？阿若啦湖景美宿正是您的理想之选。酒店坐落于江西沟镇，直面壮丽青海湖，我们拥有临湖视角，让您足不出户，即可在房间内或露台上，将圣湖的日出日落、璀璨星河尽收眼底，告别景区人潮，独享静谧湖光。',
            recommendation: '直面青海湖，私享湖光星河',
            rooms: [
                { name: '舒睡大床房', price: '239元/晚', description: '舒适大床，湖景视野', img: 'images/hotel-6-2.png' },
                { name: '静谧双床房', price: '279元/晚', description: '双床配置，宁静舒适', img: 'images/hotel-6-3.png' }
            ]
        },
        {
            id: 7,
            name: '大柴旦N37°星空营地',
            category: '民宿',
            img: 'images/hotel-7-1.png',
            images: ['images/hotel-7-1.png', 'images/hotel-7-2.png', 'images/hotel-7-3.png'],
            address: '大柴旦镇',
            description: '作为国家4C级，青海省级自驾车营地的北纬37°星空营，是通往水上雅丹，茫崖翡翠湖进入新疆的必经之路，营地坐落于湿地、草场、群山、戈壁荒漠之中；背靠沙丘，面朝星空，营地虽靠近大柴旦镇，但遗世独立，远离灯光、噪音等城市纷扰。群星闪烁，银河璀璨，为爱好星空的朋友和摄影爱好者们提供了一个良好的场所。',
            recommendation: '遗世独立，银河璀璨星空',
            rooms: [
                { name: '普通星空标准间', price: '288元/晚', description: '标准配置，星空视野', img: 'images/hotel-7-2.png' },
                { name: '全景星空大床房', price: '348元/晚', description: '全景天窗，绝佳星空体验', img: 'images/hotel-7-3.png' }
            ]
        },
        {
            id: 8,
            name: '青海湖八瓣格桑民宿',
            category: '民宿',
            img: 'images/hotel-8-1.png',
            images: ['images/hotel-8-1.png', 'images/hotel-8-2.png', 'images/hotel-8-3.png'],
            address: '海南州共和县二郎剑景区附近',
            description: '位于海南州共和县二郎剑景区附近山脚下，海拔约3000米，远眺青海湖，近观草原山景。被誉为"青海湖边最好的民宿"，远离喧嚣，设施完善，服务成熟，口碑稳定，湖景+山景+星空，一宿多景。',
            recommendation: '湖景山景星空，一宿多景',
            rooms: [
                { name: '格乐大床地暖房', price: '577元/晚', description: '大床配置，地暖舒适', img: 'images/hotel-8-2.png' },
                { name: '八瓣亲子家庭地暖房', price: '689元/晚', description: '家庭配置，地暖舒适', img: 'images/hotel-8-3.png' }
            ]
        }
    ];

    // 宝藏铺示例数据
    const treasuresData = [
        // 农牧产品
        {
            id: 1,
            name: '青海冬虫夏草',
            category: '农牧产品',
            img: 'images/agri-1.png',
            price: '120元/克',
            func: '补肺益肾、提升免疫力',
            specs: '虫体饱满、草头粗壮',
            description: '主产于玉树等地，是雪域滋补珍品，口感微甘带菌香，无腥膻味。承载着当地藏族文化，是青海标志性特产。'
        },
        {
            id: 2,
            name: '青海黄蘑菇',
            category: '农牧产品',
            img: 'images/agri-2.png',
            price: '鲜品30元/斤、干品380元/斤',
            func: '益肠胃、增强免疫力',
            specs: '富含硒元素',
            description: '以泽库产区为佳，药食同源，新鲜菌体肥厚，干品泡发后脆嫩鲜香，烹饪后鲜味浓郁。作为高原草原珍品，是当地传统菜肴常用食材。',
            options: [
                { name: '鲜品', price: '30元/斤', description: '新鲜黄蘑菇，菌体肥厚' },
                { name: '干品', price: '380元/斤', description: '干制黄蘑菇，泡发后使用' }
            ]
        },
        {
            id: 3,
            name: '门源奶皮',
            category: '农牧产品',
            img: 'images/agri-3.png',
            price: '15元/份',
            func: '营养丰富',
            specs: '以新鲜牦牛奶为原料',
            description: '青海门源特色传统美食，奶香浓郁、口感软糯有嚼劲，无多余添加。承载着当地游牧民族的饮食文化，是待客、日常食用的佳品。'
        },
        {
            id: 4,
            name: '青海枸杞',
            category: '农牧产品',
            img: 'images/agri-4.png',
            price: '20元/斤',
            func: '滋补明目、益气安神',
            specs: '粒大饱满、色泽鲜红',
            description: '产自高原无污染产区，品质优良，可直接食用、泡水或煲汤。是青海特色农产品，承载着当地农耕与高原结合的文化特色。'
        },
        {
            id: 5,
            name: '青海牦牛肉',
            category: '农牧产品',
            img: 'images/agri-5.png',
            price: '50元/斤',
            func: '富含蛋白质和矿物质',
            specs: '肉质紧实不柴、鲜嫩少膻',
            description: '生长于高原纯净环境，营养丰富。口感劲道，适合炖、炒、卤等多种做法，是当地游牧民族的主要肉食，承载着高原游牧文化。'
        },
        {
            id: 6,
            name: '青稞饼',
            category: '农牧产品',
            img: 'images/agri-6.png',
            price: '5元/个',
            func: '补充能量，易消化',
            specs: '富含膳食纤维、碳水化合物',
            description: '外脆内软，麦香醇厚不粗糙，无多余添加剂。源于青海高原游牧民族饮食，是牧区先民适应高原环境的传统口粮，承载着藏族、土族等民族的生活智慧。'
        },
        {
            id: 7,
            name: '湟源陈醋',
            category: '农牧产品',
            img: 'images/agri-7.png',
            price: '15元/250ml',
            func: '开胃解腻、促进消化',
            specs: '酸度适中，含多种氨基酸',
            description: '青海非遗技艺，拥有近300年历史，以青稞、麸皮为原料，经传统晒醋工艺酿造，是河湟地区饮食文化的重要符号。'
        },
        {
            id: 8,
            name: '牦牛奶贝',
            category: '农牧产品',
            img: 'images/agri-8.png',
            price: '20元/袋',
            func: '补充蛋白质、钙元素',
            specs: '低糖配方',
            description: '奶香醇厚浓郁，质地紧实有嚼劲，入口不粘牙，回味有淡淡的牦牛奶清香，不添加蔗糖，保留天然奶味。'
        },
        {
            id: 9,
            name: '青海沙棘果干',
            category: '农牧产品',
            img: 'images/agri-9.png',
            price: '20元/袋',
            func: '开胃生津，补充营养',
            specs: '富含维生素C、有机酸',
            description: '果肉厚实，酸甜适口，果香浓郁，泡水、直接食用皆可。青海是沙棘的优质产区，依托高原生态资源发展特色种植。'
        },
        {
            id: 10,
            name: '门源蜂蜜',
            category: '农牧产品',
            img: 'images/agri-10.png',
            price: '30元/瓶',
            func: '快速补充能量，润肺润燥',
            specs: '富含葡萄糖、果糖及多种维生素',
            description: '质地浓稠，花香清甜自然，无齁甜感，结晶后口感绵密。产自门源高原花海，依托无污染的自然环境。'
        },
        
        // 手工艺品
        {
            id: 11,
            name: '热贡唐卡',
            category: '手工艺品',
            img: 'images/craft-1.png',
            price: '小幅300元，精品1000元',
            func: '收藏、装饰',
            specs: '天然矿物颜料绘制',
            description: '青海黄南非遗手工艺品，色彩艳丽不褪色，题材以佛像、吉祥图案为主，极具藏文化艺术价值。画作精致庄重。',
            options: [
                { name: '小幅唐卡', price: '300元', description: '适合日常收藏和装饰' },
                { name: '精品唐卡', price: '1000元', description: '大师作品，收藏价值高' }
            ]
        },
        {
            id: 12,
            name: '土族盘绣',
            category: '手工艺品',
            img: 'images/craft-2.png',
            price: '小挂件30元，绣品摆件150元',
            func: '装饰、送礼',
            specs: '针法独特、色彩鲜艳',
            description: '青海互助非遗技艺，图案多为太阳花、吉祥纹，结实耐用。常见成品有挂件、荷包、手机包、绣片，做工精美、民族气息浓。',
            options: [
                { name: '小挂件', price: '30元', description: '小巧精致，适合日常佩戴' },
                { name: '绣品摆件', price: '150元', description: '大件作品，适合装饰和送礼' }
            ]
        },
        {
            id: 13,
            name: '藏式银饰',
            category: '手工艺品',
            img: 'images/craft-3.png',
            price: '普通手链88元，银饰挂件200元',
            func: '佩戴、装饰',
            specs: '多搭配绿松石、红珊瑚',
            description: '青海藏族传统饰品，款式古朴大气，寓意平安吉祥。做工精致，佩戴显民族风情，项链、手链、戒指款式齐全。',
            options: [
                { name: '普通手链', price: '88元', description: '日常佩戴，简约大气' },
                { name: '银饰挂件', price: '200元', description: '精致挂件，适合收藏和送礼' }
            ]
        },
        {
            id: 14,
            name: '藏式香包',
            category: '手工艺品',
            img: 'images/craft-4.png',
            price: '单个15元，礼盒装45元',
            func: '驱虫、安神',
            specs: '高原香草、藏药填充',
            description: '搭配刺绣、彩绳手工制作，香气淡雅，造型小巧，挂包、挂车内都合适，是极具青海特色的小伴手礼。',
            options: [
                { name: '单个香包', price: '15元', description: '小巧便携，适合个人使用' },
                { name: '礼盒装', price: '45元', description: '精美包装，适合送礼' }
            ]
        },
        {
            id: 15,
            name: '青海藏毯',
            category: '手工艺品',
            img: 'images/craft-5.png',
            price: '杯垫25元，小型挂毯100元',
            func: '装饰、实用',
            specs: '羊毛、牦牛绒手工编织',
            description: '图案传统大气，质感厚实、耐磨美观。迷你藏毯杯垫、挂毯是热门文创，实用性强，充满高原民族特色。',
            options: [
                { name: '杯垫', price: '25元', description: '小巧实用，日常使用' },
                { name: '小型挂毯', price: '100元', description: '装饰性强，适合挂墙' }
            ]
        },
        {
            id: 16,
            name: '青海湖石画摆件',
            category: '手工艺品',
            img: 'images/craft-6.png',
            price: '30元/个',
            func: '装饰',
            specs: '青海湖天然鹅卵石',
            description: '手工绘制青海湖、茶卡盐湖等高原风光，色彩清新、画面细腻，保留石头天然纹理，质感独特。'
        },
        {
            id: 17,
            name: '藏银镶玛瑙胸针',
            category: '手工艺品',
            img: 'images/craft-7.png',
            price: '45元/枚',
            func: '装饰',
            specs: '藏银与天然玛瑙',
            description: '手工镶嵌，造型简约大气，玛瑙色泽温润，藏银纹路清晰，不易氧化，适配各类服饰。'
        },
        {
            id: 18,
            name: '藏银经文吊坠',
            category: '手工艺品',
            img: 'images/craft-8.png',
            price: '45元/个',
            func: '佩戴、祈福',
            specs: '藏银手工镌刻',
            description: '吊坠小巧精致，表面光滑，不易氧化，可搭配项链佩戴。源于藏传佛教文化，经文是藏族人民祈福的载体。'
        },
        {
            id: 19,
            name: '藏式彩绘陶罐',
            category: '手工艺品',
            img: 'images/craft-9.png',
            price: '30元/个',
            func: '收纳、装饰',
            specs: '本地陶土手工制作',
            description: '表面彩绘藏式吉祥图案，色彩饱满，釉面光滑，造型简约大方。源于藏地陶瓷制作技艺。'
        },
        {
            id: 20,
            name: '土族盘绣书签',
            category: '手工艺品',
            img: 'images/craft-10.png',
            price: '10元/个',
            func: '书签、装饰',
            specs: '土族非遗盘绣工艺',
            description: '手工绣制藏式吉祥纹样，针脚细密，色彩鲜艳，布料轻薄耐用，可单独收藏。'
        },
        
        // 饮品
        {
            id: 21,
            name: '青海熬茶',
            category: '饮品',
            img: 'images/drink-1.png',
            price: '6元/杯',
            func: '解腻暖胃、去油助消化',
            specs: '茯砖茶慢熬',
            description: '茶汤红亮温润，滋味醇厚，传统做法微咸。是高原牧民搭配牛羊肉的必备饮品，质朴实用，蕴含当地生活智慧。'
        },
        {
            id: 22,
            name: '藏式酥油茶',
            category: '饮品',
            img: 'images/drink-2.png',
            price: '15元/杯',
            func: '补充热量、抵御高原寒冷',
            specs: '酥油、茶叶、食盐调和',
            description: '香气浓郁，口感醇厚顺滑。可缓解高原不适，是藏文化标志性饮品，代表着高原民族的生活习俗与情怀。'
        },
        {
            id: 23,
            name: '青稞甜醅',
            category: '饮品',
            img: 'images/drink-3.png',
            price: '8元/碗',
            func: '健脾养胃、补充能量',
            specs: '高原青稞发酵',
            description: '酒香清甜，颗粒软糯有嚼劲，汤汁清爽，冷热饮用皆可。是河湟地区流传已久的特色饮品，充满民俗气息。'
        },
        {
            id: 24,
            name: '青海老酸奶',
            category: '饮品',
            img: 'images/drink-4.png',
            price: '8元/碗',
            func: '养胃助消化、补充营养',
            specs: '高原牦牛奶传统发酵',
            description: '质地浓稠嫩滑，奶香醇厚，酸甜适中，口感绵密。富含益生菌，是藏族传统特色饮品，承载高原游牧饮食文化。'
        },
        {
            id: 25,
            name: '青稞酒',
            category: '饮品',
            img: 'images/drink-5.png',
            price: '45元/小瓶',
            func: '活血暖身',
            specs: '青海特产青稞酿造',
            description: '酒色清亮，酒香清雅，入口绵柔醇和，回味悠长。是青海节庆、待客常用佳酿，地域特色鲜明。'
        },
        {
            id: 26,
            name: '高原黑枸杞原浆',
            category: '饮品',
            img: 'images/drink-6.png',
            price: '20元/盒',
            func: '补充花青素',
            specs: '柴达木盆地黑枸杞冷榨',
            description: '花青素含量丰富，酸甜适口，小袋独立包装，冲泡后茶汤呈梦幻蓝紫色，保留天然果香，无额外添加。'
        },
        {
            id: 27,
            name: '河湟八宝茶',
            category: '饮品',
            img: 'images/drink-7.png',
            price: '20元/罐',
            func: '温润滋补，解腻助消化',
            specs: '融合青海枸杞、红枣、桂圆、青稞等',
            description: '茶汤色泽清亮，香气醇厚，口感清甜不腻，罐装密封保鲜。源自河湟地区多民族融合的茶饮文化。'
        },
        {
            id: 28,
            name: '藏式青稞苦荞茶',
            category: '饮品',
            img: 'images/drink-8.png',
            price: '15元/盒',
            func: '清爽解腻，助力消化',
            specs: '高原青稞与苦荞',
            description: '麦香醇厚，茶包独立包装，冲泡后茶汤清亮，入口微苦回甘。融合青海青稞农耕文化与苦荞养生理念。'
        },
        {
            id: 29,
            name: '高原白刺果茶',
            category: '饮品',
            img: 'images/drink-9.png',
            price: '15元/盒',
            func: '果香清新，酸甜适口',
            specs: '青海高原白刺果',
            description: '茶包便携易泡，茶汤清亮，保留天然果香，无额外添加。源于青海本地野生植物资源。'
        },
        {
            id: 30,
            name: '藏区牦牛奶茶粉',
            category: '饮品',
            img: 'images/drink-10.png',
            price: '10元/袋',
            func: '奶香浓郁，补充能量',
            specs: '高原牦牛奶与红茶',
            description: '速溶粉易冲泡，甜度适中，无植脂末添加，保留藏式奶茶风味。源于藏族传统奶茶文化。'
        },
        
        // 文创产品
        {
            id: 31,
            name: '土族盘绣钥匙扣',
            category: '文创产品',
            img: 'images/culture-1.png',
            price: '25元',
            func: '装饰、实用',
            specs: '土族盘绣技艺',
            description: '纯手工绣制太阳花、云纹等吉祥纹样，色彩饱和度高、搭配和谐，针脚细密紧实、不易脱线。'
        },
        {
            id: 32,
            name: '唐卡文创挂画',
            category: '文创产品',
            img: 'images/culture-2.png',
            price: '66元',
            func: '装饰',
            specs: '高清复刻工艺',
            description: '以藏传佛教文化为灵感，还原天然矿物颜料的浓郁色泽，画面精致庄严，线条流畅细腻。'
        },
        {
            id: 33,
            name: '青海风景明信片套装',
            category: '文创产品',
            img: 'images/culture-3.png',
            price: '15元/套',
            func: '邮寄、收藏',
            specs: '8-12张/套',
            description: '精选青海湖、茶卡盐湖、塔尔寺、祁连山等经典地标风光，采用高清覆膜印刷，色彩还原度高。'
        },
        {
            id: 34,
            name: '藏式纹样文创笔记本',
            category: '文创产品',
            img: 'images/culture-4.png',
            price: '25元',
            func: '书写、收藏',
            specs: '烫金、压纹工艺',
            description: '封面提取青海藏族传统吉祥八宝、卷草纹等元素，设计简约大气、质感高级，内页纸质顺滑厚实。'
        },
        {
            id: 35,
            name: '牦牛造型文创摆件',
            category: '文创产品',
            img: 'images/culture-5.png',
            price: '35元',
            func: '装饰',
            specs: '树脂浮雕工艺',
            description: '以高原牦牛为原型，造型简约大气、线条流畅，还原牦牛憨厚坚韧的形态，表面打磨细腻、色泽温润自然。'
        },
        {
            id: 36,
            name: '土族盘绣手机挂绳',
            category: '文创产品',
            img: 'images/culture-6.png',
            price: '18元/条',
            func: '手机挂绳',
            specs: '土族盘绣工艺',
            description: '采用土族盘绣工艺制作装饰主体，搭配耐磨挂绳，长度适中，佩戴舒适，不易褪色、变形。'
        },
        {
            id: 37,
            name: '土族盘绣卡套',
            category: '文创产品',
            img: 'images/culture-7.png',
            price: '20元/个',
            func: '卡片收纳',
            specs: '土族盘绣工艺',
            description: '采用土族盘绣工艺缝制卡套主体，绣制吉祥纹样，拉链顺滑，内部卡位合理，使用便捷。'
        },
        {
            id: 38,
            name: '藏式唐卡冰箱贴',
            category: '文创产品',
            img: 'images/culture-8.png',
            price: '10元/个',
            func: '装饰、便签',
            specs: '迷你唐卡复刻工艺',
            description: '采用迷你唐卡复刻工艺，还原矿物颜料色彩，图案为吉祥八宝，印刷清晰，材质轻便不易损坏。'
        },
        {
            id: 39,
            name: '蒙古族绒布压纹收纳包',
            category: '文创产品',
            img: 'images/culture-9.png',
            price: '20元/个',
            func: '收纳',
            specs: '高原绒布',
            description: '采用高原绒布为原料，热压蒙古纹、草原纹样，布料触感细腻，拉链顺滑，尺寸适中，实用性强。'
        },
        {
            id: 40,
            name: '撒拉族几何刺绣手机壳',
            category: '文创产品',
            img: 'images/culture-10.png',
            price: '20元/个',
            func: '手机保护',
            specs: '撒拉族传统刺绣工艺',
            description: '采用撒拉族传统刺绣工艺，手工绣制几何纹样，面料柔软贴合手机，不刮屏、不松动，适配多种机型。'
        }
    ];

    // 旅趣营广场示例数据
    let plazaData = [
        {
            id: 1,
            user: '旅行的蜗牛',
            avatar: 'images/avatar-1.jpg',
            content: '上周刚去了青海湖，真的太美了！建议大家一定要逆时针环湖，风景更好。另外，早晚温差大，记得带厚衣服！',
            timestamp: '2天前'
        },
        {
            id: 2,
            user: '爱吃鱼的猫',
            avatar: 'images/avatar-2.jpg',
            content: '茶卡盐湖的小火车一定要坐，可以深入湖心，拍出来的照片跟天空之镜一样，完全不用P图！太值了！',
            timestamp: '5天前'
        },
        {
            id: 3,
            user: '风和日丽',
            avatar: 'images/avatar-3.jpg',
            content: '塔尔寺的堆绣和壁画太震撼了，充满了艺术感和历史的厚重。讲解员讲得也很好，值得一去。',
            timestamp: '1周前'
        },
        {
            id: 4,
            user: '吃货小分队',
            avatar: 'images/avatar-4.jpg',
            content: '青海的手抓羊肉名不虚传，一点膻味都没有，肉质鲜嫩，配上蒜片，绝了！',
            timestamp: '1周前'
        },
        {
            id: 5,
            user: '摄影发烧友',
            avatar: 'images/avatar-5.jpg',
            content: '在青海湖边拍星空，银河清晰可见，美到窒息。晚上非常冷，保暖措施一定要做好。',
            timestamp: '2周前'
        },
        {
            id: 6,
            user: '自驾游爱好者',
            avatar: 'images/avatar-1.jpg',
            content: '环青海湖自驾真的是一种享受，路况很好，沿途的风景一直在变化，雪山、草原、湖泊、油菜花，太棒了。',
            timestamp: '3周前'
        },
        {
            id: 7,
            user: '文艺青年',
            avatar: 'images/avatar-2.jpg',
            content: '互助的土族风情园很有意思，了解了土族的文化和服饰，他们的彩虹袖很漂亮。',
            timestamp: '1个月前'
        },
        {
            id: 8,
            user: '爱喝酸奶的女孩',
            avatar: 'images/avatar-3.jpg',
            content: '青海老酸奶，yyds！每天都要喝一碗，上面有一层黄色的奶皮，特别香醇。',
            timestamp: '1个月前'
        },
        {
            id: 9,
            user: '背包客小张',
            avatar: 'images/avatar-4.jpg',
            content: '从西宁坐火车到拉萨，沿途经过可可西里，看到了藏羚羊，非常激动！青藏铁路本身就是一道风景线。',
            timestamp: '1个月前'
        },
        {
            id: 10,
            user: '美食探索家',
            avatar: 'images/avatar-5.jpg',
            content: '西宁莫家街的小吃太多了，酿皮、炕锅羊排、甜醅，每一样都很好吃，选择困难症都要犯了。',
            timestamp: '2个月前'
        },
        {
            id: 11,
            user: '退休王叔',
            avatar: 'images/avatar-1.jpg',
            content: '我们老两口报的康养团，在疗养院住了几天，空气好，吃得也健康，每天散散步，很舒服。',
            timestamp: '2个月前'
        },
        {
            id: 12,
            user: '骑行者',
            avatar: 'images/avatar-2.jpg',
            content: '骑行青海湖是我一直以来的梦想，终于实现了！虽然有点累，但看到那样的美景，一切都值了。',
            timestamp: '2个月前'
        },
        {
            id: 13,
            user: '历史迷',
            avatar: 'images/avatar-3.jpg',
            content: '去了原子城，了解了那段激情燃烧的岁月，很受教育，对老一辈科学家充满了敬意。',
            timestamp: '3个月前'
        },
        {
            id: 14,
            user: '小红薯达人',
            avatar: 'images/avatar-4.jpg',
            content: '茶卡盐湖拍照小技巧：一定要穿颜色鲜艳的裙子，红色、白色都很出片！最好是晴天去，倒影效果才好。',
            timestamp: '3个月前'
        },
        {
            id: 15,
            user: '家庭出游',
            avatar: 'images/avatar-5.jpg',
            content: '带孩子去了青海湖，看到了很多鸟，孩子很开心。就是要注意防晒，高原的太阳太厉害了。',
            timestamp: '4个月前'
        },
        {
            id: 16,
            user: '寻找诗和远方',
            avatar: 'images/avatar-1.jpg',
            content: '在湖边坐了一下午，什么都没干，就看着云卷云舒，感觉心灵都被净化了。',
            timestamp: '4个月前'
        },
        {
            id: 17,
            user: '面食爱好者',
            avatar: 'images/avatar-2.jpg',
            content: '青海的面食太好吃了！尕面片、炮仗面、干拌面...一个星期不重样。',
            timestamp: '5个月前'
        },
        {
            id: 18,
            user: '毕业旅行',
            avatar: 'images/avatar-3.jpg',
            content: '和同学们一起来的毕业旅行，留下了很多美好的回忆。青海，我们后会有期！',
            timestamp: '5个月前'
        },
        {
            id: 19,
            user: '探险家',
            avatar: 'images/avatar-4.jpg',
            content: '挑战了年宝玉则，风景原始又壮丽，徒步过程很辛苦，但登顶的瞬间觉得一切都值得。',
            timestamp: '6个月前'
        },
        {
            id: 20,
            user: '文化之旅',
            avatar: 'images/avatar-5.jpg',
            content: '对藏传佛教很感兴趣，塔尔寺是一个很好的起点，建筑和氛围都让人心静。',
            timestamp: '6个月前'
        },
        {
            id: 21,
            user: '候鸟观察员',
            avatar: 'images/avatar-1.jpg',
            content: '鸟岛真的是鸟类的天堂，看到了好多不同种类的候鸟，长焦镜头是必备的！',
            timestamp: '7个月前'
        },
        {
            id: 22,
            user: '简单的快乐',
            avatar: 'images/avatar-2.jpg',
            content: '在草原上骑马，感觉自己像个侠客，哈哈！牧民们都很淳朴热情。',
            timestamp: '7个月前'
        }
    ];

    // “我的”页面示例数据
    const ordersData = [
        {
            orderId: '202603040001',
            timestamp: '2026-03-04 10:30:15',
            type: '宝藏铺',
            items: [
                { name: '青海手工藏毯', price: '1280.00元', img: 'images/product-1.png' },
            ],
            total: '1280.00元'
        },
        {
            orderId: '202602180007',
            timestamp: '2026-02-18 15:05:48',
            type: '宝藏铺',
            items: [
                { name: '茶卡盐湖门票', price: '60.00元', img: 'images/attraction-2.png' },
                { name: '高原牦牛肉干', price: '88.00元', img: 'images/product-2.png' }
            ],
            total: '148.00元'
        }
    ];

    const favoritesData = [
        { type: 'attraction', id: 1 }, // 对应 attractionsData 中的青海湖
        { type: 'product', id: 2 }      // 对应 treasuresData 中的高原牦牛肉干
    ];

    const galleryContainer = document.getElementById('gallery-container');

    function populateGallery() {
        galleryContainer.innerHTML = ''; // 清空现有内容
        attractionsData.forEach(attraction => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.id = attraction.id;
            
            // 检查是否已收藏
            const isFavorite = favoritesData.some(fav => fav.type === 'attraction' && fav.id === attraction.id);
            
            galleryItem.innerHTML = `
                <div class="gallery-image-container">
                    <img src="${attraction.img}" alt="${attraction.name}">
                    <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-type="attraction" data-id="${attraction.id}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
                <div class="gallery-item-info">
                    <h4>${attraction.name}</h4>
                    <button class="view-attraction-details" data-id="${attraction.id}">查看详情</button>
                </div>
            `;
            galleryContainer.appendChild(galleryItem);
        });
        
        // 添加收藏按钮事件监听
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = e.target.dataset.type;
                const id = parseInt(e.target.dataset.id);
                toggleFavorite(type, id, e.target);
            });
        });
    }

    // 显示景点详情和门票选择
    function showAttractionDetailsModal(attraction) {
        const modal = document.createElement('div');
        modal.className = 'attraction-details-modal';
        modal.innerHTML = `
            <div class="attraction-details-content">
                <h2>${attraction.name}</h2>
                <div class="attraction-details-images">
                    ${attraction.images && attraction.images.length > 0 ? attraction.images.map((img, index) => `
                        <img src="${img}" alt="${attraction.name} ${index + 1}" class="detail-img">
                    `).join('') : `<img src="${attraction.img}" alt="${attraction.name}" class="detail-img">`}
                </div>
                <div class="attraction-details-info">
                    <p><strong>门票：</strong>${attraction.ticket}</p>
                    <p><strong>描述：</strong>${attraction.description}</p>
                    <p><strong>海拔：</strong>${attraction.altitude}米</p>
                    <p><strong>注意事项：</strong>${attraction.notes}</p>
                </div>
                <div class="attraction-options-section">
                    <h3>选择服务</h3>
                    <div class="attraction-options-list">
                        ${attraction.options.map((option, index) => `
                            <div class="attraction-option-item">
                                <div class="attraction-option-info">
                                    <h4>${option.name}</h4>
                                    <p class="option-description">${option.description}</p>
                                    <p class="option-price">${option.price}</p>
                                </div>
                                <button class="add-option-btn" data-option-index="${index}" data-attraction-id="${attraction.id}">添加</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="close-modal-btn">关闭</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        // 关闭按钮事件
        modal.querySelector('.close-modal-btn').addEventListener('click', () => {
            modal.remove();
        });
        
        // 添加服务按钮事件
        modal.querySelectorAll('.add-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const optionIndex = parseInt(e.target.dataset.optionIndex);
                const attractionId = parseInt(e.target.dataset.attractionId);
                const attractionItem = attractionsData.find(a => a.id === attractionId);
                const selectedOption = attractionItem.options[optionIndex];
                
                // 直接添加到订单
                addAttractionOrder(attractionItem, selectedOption);
                modal.remove();
                alert('添加成功！已添加到"我的订单"中。');
            });
        });
    }

    // 添加景点订单
    function addAttractionOrder(attractionItem, option) {
        const newOrder = {
            orderId: Date.now().toString(),
            timestamp: new Date().toLocaleString('zh-CN'),
            type: '景点',
            attractionName: attractionItem.name,
            optionName: option.name,
            optionPrice: option.price,
            optionDescription: option.description,
            image: attractionItem.images && attractionItem.images.length > 0 ? attractionItem.images[0] : attractionItem.img
        };
        
        ordersData.unshift(newOrder);
        renderOrders();
    }

    // 景点点击事件 (事件委托)
    galleryContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-attraction-details')) {
            const itemId = parseInt(e.target.dataset.id);
            const item = attractionsData.find(a => a.id === itemId);
            if (item) {
                showAttractionDetailsModal(item);
            }
        }
    });

    populateGallery();

    // 康养驿功能
    const wellnessSearchInput = document.getElementById('wellness-search-input');
    const wellnessSearchBtn = document.getElementById('wellness-search-btn');
    const wellnessResultsContainer = document.getElementById('wellness-results-container');

    function renderWellnessResults(results) {
        wellnessResultsContainer.innerHTML = ''; // 清空旧结果
        if (results.length === 0) {
            wellnessResultsContainer.innerHTML = '<p>未找到相关康养地点。</p>';
            return;
        }

        results.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'wellness-item';
            
            // 使用第一张图片作为封面
            const coverImage = item.images && item.images.length > 0 ? item.images[0] : item.img;
            
            // 检查是否已收藏
            const isFavorite = favoritesData.some(fav => fav.type === 'wellness' && fav.id === item.id);
            
            itemDiv.innerHTML = `
                <div class="wellness-image-container">
                    <img src="${coverImage}" alt="${item.name}">
                    <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-type="wellness" data-id="${item.id}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
                <div class="wellness-item-content">
                    <h3 class="wellness-name">${item.name}</h3>
                    <p><strong>环境：</strong>${item.environment}</p>
                    <button class="view-details-btn" data-id="${item.id}">查看详情</button>
                </div>
            `;
            wellnessResultsContainer.appendChild(itemDiv);
        });
        
        // 添加收藏按钮事件监听
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = e.target.dataset.type;
                const id = parseInt(e.target.dataset.id);
                toggleFavorite(type, id, e.target);
            });
        });
    }

    function searchWellness() {
        const searchTerm = wellnessSearchInput.value.trim().toLowerCase();
        const filteredResults = wellnessData.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.location.toLowerCase().includes(searchTerm)
        );
        renderWellnessResults(filteredResults);
    }

    // 默认显示所有康养地点
    renderWellnessResults(wellnessData);

    wellnessSearchBtn.addEventListener('click', searchWellness);
    wellnessSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchWellness();
        }
    });

    // 康养中心点击事件 (事件委托)
    wellnessResultsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details-btn')) {
            const itemId = parseInt(e.target.dataset.id);
            const item = wellnessData.find(w => w.id === itemId);
            if (item) {
                showWellnessDetailsModal(item);
            }
        }
    });
    
    function showWellnessDetailsModal(item) {
        const modal = document.createElement('div');
        modal.className = 'wellness-details-modal';
        modal.innerHTML = `
            <div class="wellness-details-content">
                <h2>${item.name}</h2>
                <div class="wellness-details-images">
                    ${item.images && item.images.length > 0 ? item.images.map((img, index) => `
                        <img src="${img}" alt="${item.name} ${index + 1}" class="detail-img">
                    `).join('') : `<img src="${item.img}" alt="${item.name}" class="detail-img">`}
                </div>
                <div class="wellness-details-info">
                    <p><strong>环境：</strong>${item.environment}</p>
                    <p><strong>项目：</strong>${item.projects}</p>
                    <p><strong>费用：</strong>${item.cost}</p>
                </div>
                <div class="room-types-section">
                    <h3>选择房型</h3>
                    <div class="room-types-list">
                        ${item.roomTypes.map((room, index) => `
                            <div class="room-type-item">
                                <div class="room-type-info">
                                    <h4>${room.name}</h4>
                                    <p class="room-description">${room.description}</p>
                                    <p class="room-price">${room.price}</p>
                                </div>
                                <button class="book-room-btn" data-room-index="${index}" data-wellness-id="${item.id}">预订</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="close-modal-btn">关闭</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        // 关闭按钮事件
        modal.querySelector('.close-modal-btn').addEventListener('click', () => {
            modal.remove();
        });
        
        // 预订房型按钮事件
        modal.querySelectorAll('.book-room-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const roomIndex = parseInt(e.target.dataset.roomIndex);
                const wellnessId = parseInt(e.target.dataset.wellnessId);
                const wellnessItem = wellnessData.find(w => w.id === wellnessId);
                const selectedRoom = wellnessItem.roomTypes[roomIndex];
                
                // 直接添加到订单
                addWellnessOrder(wellnessItem, selectedRoom);
                modal.remove();
                alert('预订成功！订单已添加到"我的订单"中。');
            });
        });
    }
    
    function addWellnessOrder(wellnessItem, room) {
        const newOrder = {
            orderId: Date.now().toString(),
            timestamp: new Date().toLocaleString('zh-CN'),
            type: '康养中心',
            wellnessName: wellnessItem.name,
            roomName: room.name,
            roomPrice: room.price,
            roomDescription: room.description,
            image: wellnessItem.images && wellnessItem.images.length > 0 ? wellnessItem.images[0] : wellnessItem.img
        };
        
        ordersData.unshift(newOrder);
        renderOrders();
    }

    // 支付流程
    const paymentMethodModal = document.getElementById('payment-method-modal');
    const cardPaymentModal = document.getElementById('card-payment-modal');
    const qrPaymentModal = document.getElementById('qr-payment-modal');

    const paymentMethodCloseBtn = document.querySelector('.payment-method-close-btn');
    const cardPaymentCloseBtn = document.querySelector('.card-payment-close-btn');
    const qrPaymentCloseBtn = document.querySelector('.qr-payment-close-btn');

    const cardPaymentBtn = document.getElementById('card-payment-btn');
    const qrPaymentBtn = document.getElementById('qr-payment-btn');
    const cardPaymentForm = document.getElementById('card-payment-form');

    paymentMethodCloseBtn.addEventListener('click', () => paymentMethodModal.style.display = 'none');
    cardPaymentCloseBtn.addEventListener('click', () => cardPaymentModal.style.display = 'none');
    qrPaymentCloseBtn.addEventListener('click', () => qrPaymentModal.style.display = 'none');

    cardPaymentBtn.addEventListener('click', () => {
        paymentMethodModal.style.display = 'none';
        cardPaymentModal.style.display = 'block';
    });

    qrPaymentBtn.addEventListener('click', () => {
        paymentMethodModal.style.display = 'none';
        qrPaymentModal.style.display = 'block';
    });

    cardPaymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('支付成功！您的预订已确认。');
        cardPaymentModal.style.display = 'none';
        cardPaymentForm.reset();
    });

    // 酒店预订功能
    const hotelsContainer = document.getElementById('hotels-container');
    const hotelFilterBtns = document.querySelectorAll('#hotels-page .filter-btn');
    const hotelsSearchInput = document.getElementById('hotels-search-input');

    // 渲染酒店列表
    function renderHotels(filteredHotels = hotelsData) {
        if (!hotelsContainer) return;
        
        hotelsContainer.innerHTML = '';
        
        filteredHotels.forEach(hotel => {
            const hotelCard = document.createElement('div');
            hotelCard.className = 'gallery-item';
            hotelCard.innerHTML = `
                <div class="gallery-image-container">
                    <img src="${hotel.img}" alt="${hotel.name}">
                </div>
                <h3>${hotel.name}</h3>
                <p class="hotel-recommendation">${hotel.recommendation}</p>
                <p class="hotel-address">${hotel.address}</p>
                <button class="view-hotel-btn" data-hotel-id="${hotel.id}">查看详情</button>
            `;
            hotelsContainer.appendChild(hotelCard);
        });
        
        // 添加查看详情按钮事件监听
        document.querySelectorAll('.view-hotel-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const hotelId = parseInt(e.target.dataset.hotelId);
                const hotel = hotelsData.find(h => h.id === hotelId);
                if (hotel) {
                    openHotelModal(hotel);
                }
            });
        });
    }

    // 打开酒店详情模态框
    function openHotelModal(hotel) {
        const modal = document.getElementById('hotel-modal');
        if (!modal) return;
        
        // 设置模态框内容
        document.getElementById('hotel-modal-img').src = hotel.img;
        document.getElementById('hotel-modal-title').textContent = hotel.name;
        document.getElementById('hotel-modal-category').textContent = hotel.category;
        document.getElementById('hotel-modal-address').textContent = hotel.address;
        document.getElementById('hotel-modal-description').textContent = hotel.description;
        
        // 渲染房型列表
        const roomsList = document.getElementById('hotel-rooms-list');
        roomsList.innerHTML = hotel.rooms.map(room => `
            <div class="product-option-item">
                <div class="product-option-info">
                    <img src="${room.img}" alt="${room.name}" style="width: 100%; max-width: 200px; height: auto; margin-bottom: 10px;">
                    <h4>${room.name}</h4>
                    <p class="option-description">${room.description}</p>
                    <p class="option-price">${room.price}</p>
                </div>
                <button class="add-room-btn" data-hotel-id="${hotel.id}" data-room-index="${hotel.rooms.indexOf(room)}">选择</button>
            </div>
        `).join('');
        
        // 为选择按钮添加事件监听
        roomsList.querySelectorAll('.add-room-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const hotelId = parseInt(e.target.dataset.hotelId);
                const roomIndex = parseInt(e.target.dataset.roomIndex);
                const hotelItem = hotelsData.find(h => h.id === hotelId);
                const selectedRoom = hotelItem.rooms[roomIndex];
                
                // 添加到订单
                addHotelToOrder(hotelItem, selectedRoom);
                modal.style.display = 'none';
            });
        });
        
        // 显示模态框
        modal.style.display = 'block';
    }

    // 添加酒店到订单
    function addHotelToOrder(hotel, room) {
        const orderItem = {
            orderId: Date.now().toString(),
            type: '酒店预订',
            hotelName: hotel.name,
            roomName: room.name,
            roomPrice: room.price,
            roomDescription: room.description,
            image: hotel.img,
            timestamp: new Date().toLocaleString('zh-CN')
        };
        
        ordersData.unshift(orderItem);
        renderOrders();
        alert('已成功加入订单！');
    }

    // 酒店筛选功能
    if (hotelFilterBtns.length > 0) {
        hotelFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // 更新按钮状态
                hotelFilterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                let filteredHotels = hotelsData;
                
                if (category !== 'all') {
                    filteredHotels = hotelsData.filter(hotel => hotel.category === category);
                }
                
                renderHotels(filteredHotels);
            });
        });
    }

    // 酒店搜索功能
    if (hotelsSearchInput) {
        hotelsSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredHotels = hotelsData.filter(hotel => 
                hotel.name.toLowerCase().includes(searchTerm) ||
                hotel.category.toLowerCase().includes(searchTerm) ||
                hotel.address.toLowerCase().includes(searchTerm)
            );
            renderHotels(filteredHotels);
        });
    }

    // 初始化酒店页面
    function initHotelsPage() {
        renderHotels();
    }

    // 宝藏铺功能
    const treasuresContainer = document.getElementById('treasures-container');
    const filterBtns = document.querySelectorAll('#treasures-page .filter-btn');
    const treasuresSearchInput = document.getElementById('treasures-search-input');

    function renderTreasures(products) {
        treasuresContainer.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'gallery-item product-item'; // 复用 gallery-item 样式
            productItem.dataset.id = product.id;
            
            // 检查是否已收藏
            const isFavorite = favoritesData.some(fav => fav.type === 'product' && fav.id === product.id);
            
            productItem.innerHTML = `
                <div class="gallery-image-container">
                    <img src="${product.img}" alt="${product.name}">
                    <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-type="product" data-id="${product.id}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
                <div class="gallery-item-info">
                    <h4>${product.name}</h4>
                    <p class="product-price">${product.price}</p>
                    <p class="product-desc">${product.func}</p>
                </div>
            `;
            
            // 添加点击事件，打开详情模态框
            productItem.addEventListener('click', (e) => {
                if (!e.target.classList.contains('favorite-btn')) {
                    openProductModal(product);
                }
            });
            
            treasuresContainer.appendChild(productItem);
        });
        
        // 添加收藏按钮事件监听
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = e.target.dataset.type;
                const id = parseInt(e.target.dataset.id);
                toggleFavorite(type, id, e.target);
            });
        });
    }

    // 打开产品详情模态框
    function openProductModal(product) {
        const modal = document.getElementById('product-modal');
        if (!modal) {
            console.error('Modal not found!');
            return;
        }
        modal.dataset.productId = product.id;
        
        // 检查所有需要的DOM元素是否存在
        const imgElement = document.getElementById('product-modal-img');
        const titleElement = document.getElementById('product-modal-title');
        const categoryElement = document.getElementById('product-modal-category');
        const functionElement = document.getElementById('product-modal-function');
        const specsElement = document.getElementById('product-modal-specs');
        const descriptionElement = document.getElementById('product-modal-description');
        const optionsContainer = document.getElementById('product-options-container');
        const optionsList = document.getElementById('product-options-list');

        if (imgElement) imgElement.src = product.img;
        if (titleElement) titleElement.textContent = product.name + ' - ' + product.price;
        if (categoryElement) categoryElement.textContent = product.category;
        if (functionElement) functionElement.textContent = product.func;
        if (specsElement) specsElement.textContent = product.specs;
        if (descriptionElement) descriptionElement.textContent = product.description;
        
        // 处理产品选项
        if (product.options && product.options.length > 0) {
            optionsContainer.style.display = 'block';
            optionsList.innerHTML = product.options.map((option, index) => `
                <div class="product-option-item">
                    <div class="product-option-info">
                        <h4>${option.name}</h4>
                        <p class="option-description">${option.description}</p>
                        <p class="option-price">${option.price}</p>
                    </div>
                    <button class="add-option-btn" data-option-index="${index}" data-product-id="${product.id}">选择</button>
                </div>
            `).join('');
            
            // 为选项按钮添加事件监听
            optionsList.querySelectorAll('.add-option-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const optionIndex = parseInt(e.target.dataset.optionIndex);
                    const productId = parseInt(e.target.dataset.productId);
                    const productItem = treasuresData.find(p => p.id === productId);
                    const selectedOption = productItem.options[optionIndex];
                    
                    // 添加到订单
                    addProductWithOptionToOrder(productItem, selectedOption);
                    modal.style.display = 'none';
                });
            });
        } else {
            optionsContainer.style.display = 'block';
            optionsList.innerHTML = `
                <div class="product-option-item">
                    <div class="product-option-info">
                        <h4>标准选项</h4>
                        <p class="option-price">${product.price}</p>
                    </div>
                    <button class="add-option-btn" data-product-id="${product.id}">加入订单</button>
                </div>
            `;
            
            // 为加入订单按钮添加事件监听
            optionsList.querySelectorAll('.add-option-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.productId);
                    addProductToOrder(productId);
                    modal.style.display = 'none';
                });
            });
        }
        
        modal.style.display = 'block';
    }

    // 添加产品到订单
    function addProductToOrder(productId) {
        const product = treasuresData.find(p => p.id === productId);
        if (product) {
            // 创建订单对象
            const orderItem = {
                orderId: Date.now().toString(),
                type: '宝藏铺',
                items: [{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    img: product.img
                }],
                total: product.price,
                timestamp: new Date().toLocaleString('zh-CN')
            };
            
            // 添加到订单数据
            ordersData.unshift(orderItem); // 添加到数组开头，显示最新订单
            
            // 重新渲染订单
            renderOrders();
            
            // 显示加入成功弹框
            showSuccessModal('已成功添加到订单！');
        } else {
        }
    }

    // 添加带选项的产品到订单
    function addProductWithOptionToOrder(product, option) {
        if (product && option) {
            // 创建订单对象
            const orderItem = {
                orderId: Date.now().toString(),
                type: '宝藏铺',
                items: [{
                    id: product.id,
                    name: product.name,
                    optionName: option.name,
                    optionPrice: option.price,
                    optionDescription: option.description,
                    img: product.img
                }],
                total: option.price,
                timestamp: new Date().toLocaleString('zh-CN')
            };
            
            // 添加到订单数据
            ordersData.unshift(orderItem);
            
            // 重新渲染订单
            renderOrders();
            
            // 显示加入成功弹框
            showSuccessModal('已成功添加到订单！');
        } else {
        }
    }

    // 显示成功弹框
    function showSuccessModal(message) {
        // 检查是否已存在成功弹框
        let successModal = document.getElementById('success-modal');
        if (!successModal) {
            successModal = document.createElement('div');
            successModal.id = 'success-modal';
            successModal.className = 'modal';
            successModal.style.display = 'none';
            successModal.innerHTML = `
                <div class="modal-content success-modal-content">
                    <div class="success-icon">✓</div>
                    <h3>操作成功</h3>
                    <p id="success-message"></p>
                    <button id="success-close-btn" class="btn-primary">确定</button>
                </div>
            `;
            document.body.appendChild(successModal);
            
            // 添加关闭按钮事件
            document.getElementById('success-close-btn').addEventListener('click', () => {
                successModal.style.display = 'none';
            });
        }
        
        // 设置消息内容并显示弹框
        document.getElementById('success-message').textContent = message;
        successModal.style.display = 'block';
    }

    function filterAndSearchTreasures() {
        const searchTerm = treasuresSearchInput.value.trim().toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        let filteredProducts = treasuresData;

        // 分类筛选
        if (activeCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
        }

        // 搜索筛选
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
        }

        renderTreasures(filteredProducts);
    }

    // 分类按钮事件
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            filterAndSearchTreasures();
        });
    });

    // 搜索框事件
    treasuresSearchInput.addEventListener('keyup', filterAndSearchTreasures);

    // 默认显示所有产品
    renderTreasures(treasuresData);

    // 旅趣营功能
    const subNavBtns = document.querySelectorAll('.sub-nav-btn');
    const subPages = document.querySelectorAll('.sub-page-content');
    const plazaContent = document.getElementById('plaza-content');

    function renderPlazaPosts() {
        plazaContent.innerHTML = '';
        // 只显示前5个评论
        plazaData.slice(0, 5).forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'post-item';
            postEl.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar}" alt="${post.user}" class="post-avatar">
                    <div class="post-user-info">
                        <span class="post-user">${post.user}</span>
                        <span class="post-timestamp">${post.timestamp}</span>
                    </div>
                </div>
                <div class="post-body">
                    <p>${post.content}</p>
                </div>
            `;
            plazaContent.appendChild(postEl);
        });
    }

    // 子页面切换
    subNavBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            subNavBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const targetId = e.currentTarget.dataset.target;
            subPages.forEach(page => {
                page.style.display = page.id === targetId ? 'block' : 'none';
            });
        });
    });

    // 默认渲染广场帖子
    renderPlazaPosts();

    // “我的”页面功能
    const ordersContainer = document.getElementById('orders-container');
    const favoritesContainer = document.getElementById('favorites-container');

    function renderOrders() {
        ordersContainer.innerHTML = '';
        ordersData.forEach(order => {
            const orderEl = document.createElement('div');
            orderEl.className = 'order-item-new';
            
            let contentHtml = '';
            if (order.type === '康养中心') {
                // 康养中心订单
                contentHtml = `
                    <div class="order-product-item">
                        <img src="${order.image}" alt="${order.wellnessName}" class="order-product-img">
                        <div class="order-product-info">
                            <span class="order-product-name">${order.wellnessName}</span>
                            <span class="order-product-room">${order.roomName}</span>
                        </div>
                        <span class="order-product-price">${order.roomPrice}</span>
                    </div>
                `;
            } else if (order.type === '景点') {
                // 景点订单
                contentHtml = `
                    <div class="order-product-item">
                        <img src="${order.image}" alt="${order.attractionName}" class="order-product-img">
                        <div class="order-product-info">
                            <span class="order-product-name">${order.attractionName}</span>
                            <span class="order-product-room">${order.optionName}</span>
                        </div>
                        <span class="order-product-price">${order.optionPrice}</span>
                    </div>
                `;
            } else if (order.type === '酒店预订') {
                // 酒店预订订单
                contentHtml = `
                    <div class="order-product-item">
                        <img src="${order.image}" alt="${order.hotelName}" class="order-product-img">
                        <div class="order-product-info">
                            <span class="order-product-name">${order.hotelName}</span>
                            <span class="order-product-room">${order.roomName}</span>
                        </div>
                        <span class="order-product-price">${order.roomPrice}</span>
                    </div>
                `;
            } else {
                // 宝藏铺订单
                let itemsHtml = '';
                order.items.forEach(item => {
                    if (item.optionName) {
                        // 带选项的产品订单
                        itemsHtml += `
                            <div class="order-product-item">
                                <img src="${item.img}" alt="${item.name}" class="order-product-img">
                                <div class="order-product-info">
                                    <span class="order-product-name">${item.name}</span>
                                    <span class="order-product-room">${item.optionName}</span>
                                </div>
                                <span class="order-product-price">${item.optionPrice}</span>
                            </div>
                        `;
                    } else {
                        // 普通产品订单
                        itemsHtml += `
                            <div class="order-product-item">
                                <img src="${item.img}" alt="${item.name}" class="order-product-img">
                                <span>${item.name}</span>
                                <span class="order-product-price">${item.price}</span>
                            </div>
                        `;
                    }
                });
                contentHtml = itemsHtml;
            }

            orderEl.innerHTML = `
                <div class="order-header">
                    <span>订单号：${order.orderId}</span>
                    <span class="order-timestamp">下单时间：${order.timestamp}</span>
                    <button class="delete-order-btn" data-order-id="${order.orderId}">删除</button>
                </div>
                <div class="order-body">
                    ${contentHtml}
                </div>
                <div class="order-footer">
                    <span>合计：<span class="total-price">${order.total || order.roomPrice || order.optionPrice}</span></span>
                    <button class="pay-order-btn" data-order-id="${order.orderId}">去支付</button>
                </div>
            `;
            ordersContainer.appendChild(orderEl);
        });
        
        // 添加删除订单事件监听
        document.querySelectorAll('.delete-order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const orderId = e.target.dataset.orderId;
                deleteOrder(orderId);
            });
        });
        
        // 添加支付订单事件监听
        document.querySelectorAll('.pay-order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const orderId = e.target.dataset.orderId;
                openPayModal(orderId);
            });
        });
    }
    
    function deleteOrder(orderId) {
        if (confirm('确定要删除这个订单吗？')) {
            const index = ordersData.findIndex(order => order.orderId === orderId);
            if (index !== -1) {
                ordersData.splice(index, 1);
                renderOrders();
            }
        }
    }
    
    let currentPayOrderId = null;
    
    function openPayModal(orderId) {
        currentPayOrderId = orderId;
        document.getElementById('pay-modal').style.display = 'block';
    }
    
    function closePayModal() {
        document.getElementById('pay-modal').style.display = 'none';
        currentPayOrderId = null;
    }
    
    function confirmPayment() {
        if (currentPayOrderId) {
            // 这里可以添加支付逻辑
            alert('支付成功！');
            closePayModal();
        }
    }
    
    // 支付模态框关闭按钮
    document.querySelector('.pay-close-btn').addEventListener('click', closePayModal);
    
    // 确认支付按钮
    document.getElementById('confirm-pay-btn').addEventListener('click', confirmPayment);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        const payModal = document.getElementById('pay-modal');
        if (e.target === payModal) {
            closePayModal();
        }
        
        const hotelModal = document.getElementById('hotel-modal');
        if (e.target === hotelModal) {
            hotelModal.style.display = 'none';
        }
    });
    
    // 酒店详情模态框关闭按钮
    const hotelCloseBtn = document.querySelector('.hotel-close-btn');
    if (hotelCloseBtn) {
        hotelCloseBtn.addEventListener('click', () => {
            document.getElementById('hotel-modal').style.display = 'none';
        });
    }

    function renderFavorites() {
        favoritesContainer.innerHTML = '';
        favoritesData.forEach(fav => {
            let itemData = null;
            if (fav.type === 'attraction') {
                itemData = attractionsData.find(i => i.id === fav.id);
            } else if (fav.type === 'product') {
                itemData = treasuresData.find(i => i.id === fav.id);
            } else if (fav.type === 'wellness') {
                itemData = wellnessData.find(i => i.id === fav.id);
            }

            if (itemData) {
                const favEl = document.createElement('div');
                favEl.className = 'favorite-item';
                favEl.dataset.type = fav.type;
                favEl.dataset.id = fav.id;
                
                // 使用第一张图片作为封面
                const coverImage = itemData.images && itemData.images.length > 0 ? itemData.images[0] : itemData.img;
                
                favEl.innerHTML = `
                    <div class="favorite-image-container">
                        <img src="${coverImage}" alt="${itemData.name}">
                    </div>
                    <div class="favorite-info">
                        <h4>${itemData.name}</h4>
                        <div class="favorite-actions">
                            <button class="view-favorite-details" data-type="${fav.type}" data-id="${fav.id}">查看详情</button>
                            <button class="remove-favorite" data-type="${fav.type}" data-id="${fav.id}">取消收藏</button>
                        </div>
                    </div>
                `;
                favoritesContainer.appendChild(favEl);
            }
        });
        
        // 添加事件监听
        document.querySelectorAll('.view-favorite-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                const id = parseInt(e.target.dataset.id);
                viewFavoriteDetails(type, id);
            });
        });
        
        document.querySelectorAll('.remove-favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                const id = parseInt(e.target.dataset.id);
                removeFavorite(type, id);
            });
        });
    }

    // 查看收藏详情
    function viewFavoriteDetails(type, id) {
        if (type === 'attraction') {
            const attraction = attractionsData.find(a => a.id === id);
            if (attraction) {
                showAttractionDetailsModal(attraction);
            }
        } else if (type === 'wellness') {
            const wellness = wellnessData.find(w => w.id === id);
            if (wellness) {
                showWellnessDetailsModal(wellness);
            }
        } else if (type === 'product') {
            const product = treasuresData.find(p => p.id === id);
            if (product) {
                // 这里可以添加产品详情查看功能
                alert(`产品：${product.name}\n类别：${product.category}\n功能：${product.func}\n规格：${product.specs}`);
            }
        }
    }

    // 切换收藏状态
    function toggleFavorite(type, id, btn) {
        const existingIndex = favoritesData.findIndex(fav => fav.type === type && fav.id === id);
        
        if (existingIndex !== -1) {
            // 已收藏，取消收藏
            favoritesData.splice(existingIndex, 1);
            btn.classList.remove('favorited');
            btn.textContent = '☆';
            alert('已取消收藏');
        } else {
            // 未收藏，添加收藏
            favoritesData.push({ type, id });
            btn.classList.add('favorited');
            btn.textContent = '★';
            alert('已添加到收藏');
        }
        
        // 重新渲染收藏列表
        renderFavorites();
    }

    // 取消收藏
    function removeFavorite(type, id) {
        const index = favoritesData.findIndex(fav => fav.type === type && fav.id === id);
        if (index !== -1) {
            favoritesData.splice(index, 1);
            renderFavorites();
            alert('已取消收藏');
        }
    }

    function renderMyPage() {
        renderOrders();
        renderFavorites();
    }

    // 发布功能
    const publishBtn = document.getElementById('publish-btn');
    const postModal = document.getElementById('post-modal');
    const postCloseBtn = document.querySelector('.post-close-btn');
    const postTextarea = document.getElementById('post-textarea');
    const submitPostBtn = document.getElementById('submit-post-btn');
    const suggestionTextarea = document.getElementById('suggestion-textarea');
    const submitSuggestionBtn = document.getElementById('submit-suggestion-btn');

    publishBtn.addEventListener('click', () => {
        postModal.style.display = 'block';
    });

    function closePostModal() {
        postModal.style.display = 'none';
    }

    postCloseBtn.addEventListener('click', closePostModal);

    submitPostBtn.addEventListener('click', () => {
        const content = postTextarea.value.trim();
        if (content) {
            const newPost = {
                id: Date.now(),
                user: '我', // 示例用户
                avatar: 'images/avatar-me.jpg',
                content: content,
                timestamp: '刚刚'
            };
            plazaData.unshift(newPost); // 将新帖子添加到最前面
            renderPlazaPosts();
            postTextarea.value = '';
            closePostModal();
            // 切换回广场视图
            document.querySelector('.sub-nav-btn[data-target="plaza-content"]').click();
        } else {
            alert('内容不能为空！');
        }
    });

    submitSuggestionBtn.addEventListener('click', () => {
        const suggestion = suggestionTextarea.value.trim();
        if (suggestion) {
            alert('您的宝贵意见已成功提交，感谢您的反馈！');
            suggestionTextarea.value = '';
        } else {
            alert('意见内容不能为空！');
        }
    });

    // 产品详情弹窗逻辑
    function createProductModal() {
        // 获取现有模态框
        const modal = document.getElementById('product-modal');
        if (!modal) {
            console.error('Modal not found!');
            return;
        }
        
        // 关闭模态框
        const closeBtn = modal.querySelector('.product-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        
        // 点击模态框外部关闭
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        

    }

    // 初始化产品详情模态框
    createProductModal();

    // 弹窗逻辑
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalTicket = document.getElementById('modal-ticket');
    const modalDesc = document.getElementById('modal-desc');

    galleryContainer.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const attractionId = parseInt(item.dataset.id, 10);
            const attraction = attractionsData.find(a => a.id === attractionId);
            if (attraction) {
                modalImg.src = attraction.img;
                modalImg.alt = attraction.name;
                modalTitle.textContent = attraction.name;
                modalTicket.textContent = attraction.ticket;
                modalDesc.textContent = attraction.description;
                modal.style.display = 'block';
            }
        }
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止链接的默认跳转行为

            // 移除所有选项的 active 类
            navItems.forEach(i => i.classList.remove('active'));
            // 为被点击的选项添加 active 类
            e.currentTarget.classList.add('active');

            // 切换页面显示
            const pageId = e.currentTarget.dataset.page;
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                if (page.id === pageId) {
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });

            // 如果是“我的”页面，则渲染其内容
            if (pageId === 'me-page') {
                renderMyPage();
            } else if (pageId === 'hotels-page') {
                // 初始化酒店页面
                initHotelsPage();
            }
        });
    });

    const generateBtn = document.getElementById('generate-btn');
    const itineraryInput = document.getElementById('itinerary-input');
    const itineraryOutput = document.getElementById('itinerary-output');

    generateBtn.addEventListener('click', () => {
        const inputText = itineraryInput.value;

        if (!inputText.trim()) {
            itineraryOutput.innerHTML = '<p>请输入您的旅行想法，我们才能为您量身定制哦。</p>';
            return;
        }

        // --- 智能解析用户输入 ---
        const ageMatch = inputText.match(/(\d+岁)/);
        const isElderly = ageMatch && parseInt(ageMatch[1], 10) >= 60;
        const prefersSoftFood = /牙口不好|软/.test(inputText);

        const wantedAttractions = attractionsData.filter(attraction => inputText.includes(attraction.name));
        const wantedFoods = foodData.filter(food => inputText.includes(food.name));

        // --- 开始生成建议 ---
        let html = `<h2>为您生成的专属行程建议</h2>`;

        // Part 1: 总体关怀建议
        if (isElderly) {
            html += `<div class="itinerary-section care-notes">
                        <h4>给您的一些贴心小建议</h4>
                        <p>考虑到您是资深旅行家，我们特别提醒您：青海地处高原，气候干燥，紫外线强。出行前请备好保湿霜、防晒霜和太阳帽。旅途中请注意多喝水，缓步慢行，保持心情愉快，避免过度劳累。</p>
                     </div>`;
        }

        // Part 2: 景点建议
        html += `<div class="itinerary-section">
                    <h4>景点安排与建议</h4>`;
        if (wantedAttractions.length > 0) {
            wantedAttractions.forEach(attraction => {
                html += `<p><strong>${attraction.name} (海拔约${attraction.altitude}米):</strong></p>
                         <p class="suggestion-note"><em>${attraction.notes}</em></p>`;
            });
        } else {
            html += `<p>您还没指定想去的景点呢。我们为您推荐：<strong>青海湖</strong>、<strong>茶卡盐湖</strong>，都是不容错过的世界级美景！</p>`;
        }
        html += `</div>`;

        // Part 3: 美食推荐
        html += `<div class="itinerary-section">
                    <h4>美食推荐</h4>`;
        let recommendedFoods = [];
        if (prefersSoftFood) {
            html += `<p>知道您喜欢吃软一点的东西，我们为您精选了以下几款本地美味：</p>`;
            recommendedFoods = foodData.filter(food => food.texture === '软糯' || food.texture === '软滑' || food.texture === '软烂');
        } else if (wantedFoods.length > 0) {
            html += `<p>您提到的美食都非常棒，我们为您补充一些信息：</p>`;
            recommendedFoods = wantedFoods;
        } else {
            html += `<p>我们为您推荐一些不容错过的本地特色美食：</p>`;
            recommendedFoods = foodData;
        }

        html += `<ul>`;
        recommendedFoods.forEach(food => {
            html += `<li><strong>${food.name}:</strong> ${food.notes}</li>`;
        });
        html += `</ul></div>`;

        // Part 4: 结尾
        html += `<p class="footer-note">祝您在青海有一段愉快而难忘的旅程！</p>`;

        itineraryOutput.innerHTML = html;
    });
});
