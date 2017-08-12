const schema = `
    type Hero {
        _id:ID!
        heroName: String!   #英雄名称
        viability: Int      #生存能力
        attackLevel: Int    #攻击伤害
        skillLevel: Int     #技能效果
        operateLevel: Int  #上手难度
        skillIntroduce: [Skill]
        addPointAdvice: PointAdvice
        heroRelation: HeroRelation
        heroStrategy: [Strategy]
        equipAdvice: [EquipAdvice]
        inscriptionAdvice: InscriptionAdvice
    }
    type HeroStatic {
        getAll: [Hero]
        getById(id: String!): Hero
    }
    extend type RootQuery {
        hero: HeroStatic
    }
`;

const resolvers = {
    RootQuery: {
        hero: () => ({
            getAll: (args, ctx) => {
                return ctx.Hero.find({});
            },
            getById: (args, ctx) => {
                return ctx.Hero.findOne({_id: args.id});
            }
        }),
    }
}

module.exports = {
    schema,
    resolvers
}