app.factory('factory', factory);
factory.$inject = ['$q', '$timeout'];
function factory($q, $timeout) {

    var folders = [

        {
            name: "Inbox",
            id: 1,
            description: "inbox messages",
            messages: [
                {
                    subject: "  Amped Studio. 🤯",
                    content: "When you export you will have download choices MP3 or Wav, Mono or Stereo.    ",
                    id: 1,
                    isDeleted: false
                },
                {
                    subject: "Medium daily digest. 📲",
                    content: "The Rich Gets Richer Every Recession⏳ Because of This One Thing | David O. in Rich Culture",
                    id: 2,
                    isDeleted: false
                },
                {
                    subject: "Cloud Computing 🎦. ",
                    content: "Claim Data Leakage Agent Detection in Cloud Computing for your profile",
                    id: 3,
                    isDeleted: false
                }
            ]
        },

        {
            name: "Sent",
            id: 2,
            description: "sent messages",
            messages: [

                {
                    subject: "Tamizh is older than Sanskrit",
                    content: "Shiv Tandav Tamizh version Santhana Krishnan, Tamil Brahmin - தமிழ்ப்பார்ப்பான் •",
                    id: 1,
                    isDeleted: false
                },

            ]
        },

        {
            name: "Junk",
            id: 3,
            description: "junk messages",
            messages: [
                {
                    subject: "The Broken News ₹100 OFF💰!",
                    content: "Don’t miss 'The Broken News’ & other Originals🍿!",
                    id: 1,
                    isDeleted: false
                },

            ]
        },

        {
            name: "Drafts",
            id: 4,
            description: "draft messages",
            messages: [
                {
                    subject: "🎊Cambly's 10th",
                    content: "Cambly is celebrating its 10th anniversary.A special message from Sameer Shariff co-founder of Cambly.",
                    id: 1,
                    isDeleted: false
                },

            ]
        },

        {
            name: "Delete",
            id: 5,
            description: "deleted messages",
            messages: [
                {
                    subject: "Use Code: INCAANNIVERSARY",
                    content: "Promotion is valid on purchases made on 11th, 12th & 13th June, 2022 using the promotional code: INCAANNIVERSARY",
                    id: 1,
                    isDeleted: false
                },
            ]
        }

    ]

    var data = {};
    data.getContent = function (id) {

        var deferred = $q.defer();
        var msg = [];

        msg = folders[id].messages;
        deferred.resolve(msg);
        return deferred.promise;
    }

    data.arrMessages = function () {
        var arrMessages = [];
        return arrMessages;
    }

    data.add = function () {
        var add = '';
        return add;

    }

    data.messages = function () {
        var messages = [];
        return messages;
    }

    data.subject = function () {
        var subject = '';
        return subject;
    }

    data.content = function () {
        var content = '';
        return content;
    }

    data.folders = function () {
        return folders;
    }

    return data;

}
